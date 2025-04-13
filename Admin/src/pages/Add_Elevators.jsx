import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";

const Add_Elevators = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        customCategory: "",
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

        // ✅ Use customCategory if user selected "Other"
        const finalCategory =
            formData.category === "__custom__" ? formData.customCategory : formData.category;
        data.append("category", finalCategory);

        formData.images.forEach((image) => {
            if (image) {
                data.append("images", image);
            }
        });

        try {
            const response = await axios.post(`${backendUrl}/api/elevator/add`, data);
            if (response.data.success) {
                toast.success("Elevator Added successfully");

                // ✅ Reset form, including both category and customCategory
                setFormData({
                    title: "",
                    description: "",
                    category: "",
                    customCategory: "",
                    images: [],
                    imagePreviews: Array(4).fill(null),
                });
            } else {
                toast.error("Error adding elevator: " + response.data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to add elevator. Please try again.");
        }
    };

    return (
        <div className="bg-white m-4 p-4 rounded-lg shadow-xl">
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

                <div className="w-full flex flex-col gap-6 mb-6 mt-3">
                    <label className="flex flex-col w-[620px]">
                        <p className="mb-1 font-semibold text-gray-700">Elevator Name</p>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </label>

                    <label className="flex flex-col w-[620px]">
                        <p className="mb-1 font-semibold text-gray-700">Category</p>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="">Select Category</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Industrial">Industrial</option>
                            <option value="__custom__">Other</option>
                        </select>
                    </label>

                    {/* Show input if "Other" selected */}
                    {formData.category === "__custom__" && (
                        <label className="flex flex-col w-[620px]">
                            <p className="mb-1 font-semibold text-gray-700">Enter Custom Category</p>
                            <input
                                type="text"
                                name="customCategory"
                                value={formData.customCategory}
                                onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter custom category"
                            />
                        </label>
                    )}

                    <label className="flex flex-col w-[620px]">
                        <p className="mb-1 font-semibold text-gray-700">Description</p>
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
                </div>

                <button
                    type="submit"
                    className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-green-600 transition"
                >
                    Add Elevator
                </button>
            </form>
        </div>
    );
};

export default Add_Elevators;