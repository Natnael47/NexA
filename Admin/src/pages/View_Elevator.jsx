import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { backendUrl } from '../App';
import { AppContext } from '../context/AppContext';

const View_Elevator = () => {
    const { projectId } = useParams();
    const { fetchElevatorList, ElevatorList } = useContext(AppContext);
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

    const handleRemoveImage = (index) => {
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
            toast.error(response.data.message || "Error updating elevator");
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
                {isEditing ? <input type="text" name="title" value={editedElevator.title || ''} onChange={handleChange} className="border p-2 rounded" /> : editedElevator.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="relative">
                        <img
                            src={editedElevator.images[index] ? (typeof editedElevator.images[index] === 'string' ? `${backendUrl}/images/${editedElevator.images[index]}` : URL.createObjectURL(editedElevator.images[index])) : 'placeholder.jpg'}
                            alt={`Elevator ${index + 1}`}
                            className="w-48 h-36 rounded-lg object-cover shadow-md border border-gray-300 cursor-pointer"
                            onClick={() => isEditing && document.getElementById(`file-input-${index}`).click()}
                        />
                        {isEditing && editedElevator.images[index] && (
                            <button
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
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

            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg"><strong>Category:</strong> {isEditing ? <input type="text" name="category" value={editedElevator.category || ''} onChange={handleChange} className="border p-2 rounded" /> : editedElevator.category}</p>
                <p className="text-lg"><strong>Price:</strong> {isEditing ? <input type="number" name="price" value={editedElevator.price || ''} onChange={handleChange} className="border p-2 rounded" /> : `$${editedElevator.price}`}</p>
                <p className="text-lg"><strong>Description:</strong> {isEditing ? <textarea name="description" value={editedElevator.description || ''} onChange={handleChange} className="border p-2 rounded w-full" /> : editedElevator.description}</p>
            </div>

            <div className="mt-4 flex justify-center gap-4">
                {isEditing ? (
                    <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-lg">Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Edit</button>
                )}
            </div>
        </div>
    );
};

export default View_Elevator;
