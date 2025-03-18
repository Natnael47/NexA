import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { assets } from "../assets/assets";

const Add_Project = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        address: "",
        googleMapLink: "",
        category: "",
        status: "Ongoing",
        images: [], // Store image files
    });

    // Handle text input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle image selection
    const handleImageChange = (e, index) => {
        const files = [...formData.images]; // Copy existing images array
        files[index] = e.target.files[0]; // Store selected file at the correct index
        setFormData({ ...formData, images: files });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("address", formData.address);
        data.append("googleMapLink", formData.googleMapLink);
        data.append("category", formData.category);
        data.append("status", formData.status);

        // Append images
        formData.images.forEach((image, index) => {
            if (image) {
                data.append(`images`, image); // Send as an array
            }
        });

        try {
            const response = await axios.post(`${backendUrl}/api/project/add`, data);

            //const result = await response.json();
            if (response.data.success) {
                alert("Project added successfully!");
            } else {
                alert("Error adding project: " + response.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full items-start m-5">
            {/* Image Upload Section */}
            <div>
                <p className="mb-2 font-semibold">Upload Images</p>
                <div className="flex gap-2">
                    {[0, 1, 2, 3].map((index) => (
                        <label key={index} htmlFor={`image${index}`}>
                            <img className="w-40" src={assets.upload_area} alt="Upload" />
                            <input type="file" id={`image${index}`} hidden onChange={(e) => handleImageChange(e, index)} />
                        </label>
                    ))}
                </div>
            </div>

            {/* Text Inputs */}
            <div className="flex flex-wrap justify-between w-full gap-6 mb-6">
                <label className="w-full">
                    <p className="mb-1 font-semibold text-gray-700">Project Name</p>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-yellow-300"
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
                    <p className="mb-1 font-semibold text-gray-700">Address</p>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-yellow-300"
                    />
                </label>

                <label className="w-full">
                    <p className="mb-1 font-semibold text-gray-700">Location on Map (Google Maps Link)</p>
                    <input
                        type="text"
                        name="googleMapLink"
                        value={formData.googleMapLink}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-yellow-300"
                    />
                </label>

                {/* Category Dropdown */}
                <label className="w-full">
                    <p className="mb-1 font-semibold text-gray-700">Category</p>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-blue-300"
                    >
                        <option value="">Select Category</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Infrastructure">Infrastructure</option>
                    </select>
                </label>

                {/* Status Dropdown */}
                <label className="w-full">
                    <p className="mb-1 font-semibold text-gray-700">Project Status</p>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:border-0 focus:ring-red-300"
                    >
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                        <option value="Upcoming">Upcoming</option>
                    </select>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
            >
                Submit Project
            </button>
        </form>
    );
};

export default Add_Project;
