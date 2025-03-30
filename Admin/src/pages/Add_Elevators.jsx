import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";

const Add_Elevators = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        images: [],
        imagePreviews: Array(4).fill(null),
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...formData.images];
            const newPreviews = [...formData.imagePreviews];

            newImages[index] = file;
            newPreviews[index] = URL.createObjectURL(file);

            setFormData({ ...formData, images: newImages, imagePreviews: newPreviews });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("category", formData.category);

        formData.images.forEach((image) => {
            if (image) {
                data.append("images", image);
            }
        });

        try {
            const response = await axios.post(`${backendUrl}/api/elevator/add`, data);
            if (response.data.success) {
                alert("Elevator added successfully!");
                setFormData({
                    title: "",
                    description: "",
                    category: "",
                    images: [],
                    imagePreviews: Array(4).fill(null),
                });
            } else {
                alert("Error adding elevator: " + response.data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to add elevator. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full items-start m-5">
            <div>
                <p className="mb-2 font-semibold">Upload Images</p>
                <div className="flex gap-2">
                    {[0, 1, 2, 3].map((index) => (
                        <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                            <img
                                className="w-[150px] h-[100px] object-cover rounded-md border"
                                src={formData.imagePreviews[index] || assets.upload_area}
                                alt="Upload Preview"
                            />
                            <input
                                type="file"
                                id={`image${index}`}
                                hidden
                                onChange={(e) => handleImageChange(e, index)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap justify-between w-full gap-6 mb-6">
                <label className="w-full">
                    <p className="mb-1 font-semibold text-gray-700">Elevator Name</p>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300"
                    />
                </label>

                <label className="w-full">
                    <p className="mb-2 font-semibold text-gray-700">Description</p>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        rows="3"
                        placeholder="Write Description Here"
                        required
                    />
                </label>

                <label className="w-full">
                    <p className="mb-1 font-semibold text-gray-700">Category</p>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300"
                    >
                        <option value="">Select Category</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                    </select>
                </label>
            </div>

            <button
                type="submit"
                className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
            >
                Add Elevator
            </button>
        </form>
    );
};

export default Add_Elevators;