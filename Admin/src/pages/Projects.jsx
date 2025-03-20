import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-modal";
import { toast } from "react-toastify";
import { backendUrl } from '../App';
import { AppContext } from '../context/AppContext';

Modal.setAppElement("#root");

const Projects = () => {
    const { fetchProjectList, list, navigate } = useContext(AppContext);
    const [selectedFoodId, setSelectedFoodId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (foodId) => {
        setSelectedFoodId(foodId);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedFoodId(null);
        setModalIsOpen(false);
    };

    const removeProject = async () => {
        try {
            const response = await axios.delete(
                `${backendUrl}/api/project/delete/${selectedFoodId}`  // Use the project ID in the URL
            );
            await fetchProjectList(); // Make sure to update the project list after removal
            closeModal(); // Close the modal after the operation
            if (response.data.success) {
                toast.success("Project Removed");
            } else {
                toast.error("Error removing project");
            }
        } catch (error) {
            toast.error("Error deleting project: " + error.message);
        }
    };

    useEffect(() => {
        fetchProjectList();
    }, []);

    return (
        <div className="m-5 w-full max-w-6.5xl max-h-[90vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-6 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-white">Project List</h1>
                <div className="flex items-center space-x-4">
                    <button
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                        onClick={() => navigate('/add')}
                    >
                        + New Project
                    </button>
                </div>
            </div>

            {/* Project Table */}
            <div className="bg-white rounded-lg w-full max-h-[84vh] overflow-scroll shadow-lg">
                <div>
                    {/* Table Header */}
                    <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr_1fr] items-center gap-6 p-4 border-b bg-[#22C55E] text-white text-base font-semibold rounded-t-md shadow-md">
                        <b className="text-center">Image</b>
                        <b className="text-left">Title</b>
                        <b className="text-left">Category</b>
                        <b className="text-center">Status</b>
                        <b className="text-center">Actions</b>
                    </div>

                    {/* Project List */}
                    {list.length > 0 ? (
                        list.map((project, index) => (
                            <div key={index} className={`grid grid-cols-[0.6fr_1.5fr_1fr_1fr_1fr] items-center gap-6 p-4 border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-200 rounded-md shadow-md transition-all duration-300`}>
                                {/* Project Image */}
                                <div className="text-center">
                                    {project.images.length > 0 ? (
                                        <img
                                            src={`${backendUrl}/images/${project.images[0]}`}
                                            alt="Project"
                                            className="w-20 h-[70px] rounded-lg object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-500">No Image</span>
                                    )}
                                </div>

                                {/* Project Details */}
                                <p className="truncate font-semibold text-gray-800 text-base hover:text-green-600">{project.title}</p>
                                <p className="text-black text-base font-semibold px-3 py-1 rounded text-center bg-gray-200">{project.category}</p>
                                <p className={`text-sm font-medium text-center px-3 py-1 rounded inline-block ${project.status === "Completed" ? "text-green-700 bg-green-100" : "text-blue-700 bg-blue-100"}`}>
                                    {project.status}
                                </p>

                                {/* Actions */}
                                <div className="flex justify-center space-x-4">
                                    <button className="text-blue-500 hover:text-blue-700" onClick={() => navigate(`/view/${project._id}`)}>View</button>
                                    <button className="text-red-500 hover:text-red-700" onClick={() => openModal(project._id)}>Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-500">
                            No projects available.
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Delete Confirmation"
                className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto mt-24"
                overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Confirm Project Deletion</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Are you absolutely sure you want to permanently delete this project?
                        This action cannot be undone.
                    </p>
                    <div className="flex justify-center space-x-6 mt-6">
                        <button
                            onClick={closeModal}
                            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400 transition-all font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={removeProject}
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-all font-semibold"
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default Projects;
