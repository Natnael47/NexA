import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { backendUrl } from '../App';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const View_Elevator = () => {
    const { projectId } = useParams();
    const { fetchElevatorList, ElevatorList, navigate } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedElevator, setEditedElevator] = useState({ images: [], removeImages: [] });

    useEffect(() => {
        fetchElevatorList();
    }, []);

    const elevator = ElevatorList.find(item => item._id === projectId);

    useEffect(() => {
        if (elevator) {
            setEditedElevator({ ...elevator, removeImages: [] });
        }
    }, [elevator]);

    if (!elevator) {
        return <div className="flex items-center justify-center h-screen text-xl font-semibold">Loading...</div>;
    }

    const handleChange = (e) => {
        setEditedElevator({ ...editedElevator, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...editedElevator.images];
            newImages[index] = file;
            setEditedElevator(prev => ({
                ...prev,
                images: newImages
            }));
        }
    };

    const handleRemoveImage = async (index) => {
        const imageToRemove = editedElevator.images[index];
        if (typeof imageToRemove === 'string') {
            try {
                await axios.put(`${backendUrl}/api/elevator/remove-image/${projectId}`, { image: imageToRemove });
                toast.success("Image removed successfully");
                fetchElevatorList();
            } catch (error) {
                console.error("Error removing image:", error);
                toast.error("Error removing image");
            }
        }
        setEditedElevator(prev => {
            const newImages = [...prev.images];
            newImages.splice(index, 1);
            return { ...prev, images: newImages };
        });
    };

    const handleSave = async () => {
        const data = new FormData();
        data.append("title", editedElevator.title);
        data.append("description", editedElevator.description);
        data.append("category", editedElevator.category);

        editedElevator.images.forEach((image) => {
            if (image && image instanceof File) {
                data.append("images", image);
            }
        });

        try {
            await axios.put(`${backendUrl}/api/elevator/update/${projectId}`, data);
            toast.success("Elevator updated successfully");
            fetchElevatorList();
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating elevator:", error);
            toast.error("Error updating elevator");
        }
    };

    const handleCancel = () => {
        setEditedElevator({ ...elevator, removeImages: [] });
        setIsEditing(false);
    };

    return (
        <div className="container mx-auto p-8 bg-gray-100 min-h-screen rounded-lg shadow-lg flex flex-col items-start">
            {!isEditing && (
                <button
                    onClick={() => navigate('/elevator-list')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all mb-4"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                </button>
            )}

            <h1 className="text-4xl font-bold mb-2 text-left text-blue-600 bg-white p-2 rounded-lg shadow-md w-full">
                {isEditing ? (
                    <input
                        type="text"
                        name="title"
                        value={editedElevator.title || ''}
                        onChange={handleChange}
                        className="border p-2 rounded w-full text-2xl"
                    />
                ) : (
                    editedElevator.title
                )}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2 bg-gray-100 p-2 rounded-lg w-full">
                {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="relative w-48 h-36">
                        <img
                            src={editedElevator.images[index]
                                ? (typeof editedElevator.images[index] === 'string'
                                    ? `${backendUrl}/images/${editedElevator.images[index]}`
                                    : URL.createObjectURL(editedElevator.images[index]))
                                : assets.upload_area}
                            alt={`Elevator ${index + 1}`}
                            className="w-full h-full rounded-lg object-cover shadow-md border border-gray-300 cursor-pointer"
                            onClick={() => isEditing && document.getElementById(`file-input-${index}`).click()}
                        />
                        {isEditing && editedElevator.images[index] && (
                            <button
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                                onClick={() => handleRemoveImage(index)}
                            >
                                X
                            </button>
                        )}
                        {isEditing && (
                            <input
                                type="file"
                                id={`file-input-${index}`}
                                hidden
                                onChange={(e) => handleImageChange(e, index)}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-full">
                <p className="text-lg mb-3"><strong>Category:</strong> {isEditing ? <input type="text" name="category" value={editedElevator.category || ''} onChange={handleChange} className="border p-2 rounded w-full" /> : editedElevator.category}</p>
                <p className="text-lg mb-3"><strong>Price:</strong> {isEditing ? <input type="number" name="price" value={editedElevator.price || ''} onChange={handleChange} className="border p-2 rounded w-full" /> : `$${editedElevator.price}`}</p>
                <p className="text-lg mb-3"><strong>Description:</strong> {isEditing ? <textarea name="description" value={editedElevator.description || ''} onChange={handleChange} className="border p-2 rounded w-full h-24" /> : editedElevator.description}</p>
                <div className="mt-4 flex justify-center gap-4 w-full">
                    {isEditing ? (
                        <>
                            <button onClick={handleSave} className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">Save</button>
                            <button onClick={handleCancel} className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition">Cancel</button>
                        </>
                    ) : (
                        <button onClick={() => setIsEditing(true)} className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">Edit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default View_Elevator;