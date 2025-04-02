import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import { AppContext } from "../context/AppContext";

Modal.setAppElement("#root");

const Elevators = () => {
    const { fetchElevatorList, ElevatorList, navigate } = useContext(AppContext);
    const [selectedElevatorId, setSelectedElevatorId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetchElevatorList();
    }, []);

    const openModal = (elevatorId) => {
        setSelectedElevatorId(elevatorId);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedElevatorId(null);
        setModalIsOpen(false);
    };

    const removeElevator = async () => {
        try {
            const response = await axios.delete(`${backendUrl}/api/elevator/delete/${selectedElevatorId}`);
            await fetchElevatorList();
            closeModal();
            if (response.data.success) {
                toast.success("Elevator Removed");
            } else {
                toast.error("Error removing elevator");
            }
        } catch (error) {
            toast.error("Error deleting elevator: " + error.message);
        }
    };

    return (
        <div className="w-full mt-5 ml-5 max-w-7xl bg-gray-100 rounded-xl p-2">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Elevator List</h1>
                <button
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    onClick={() => navigate("/new-elevators")}
                >
                    + New Elevator
                </button>
            </div>

            <div className="bg-gray-100 rounded-lg w-full max-h-[84vh] overflow-scroll shadow-lg">
                <div className="grid grid-cols-[0.6fr_1.5fr_1fr_1fr] items-center gap-6 p-4 border-b bg-green-500 text-white text-lg font-semibold">
                    <b className="text-center">Image</b>
                    <b className="text-left">Title</b>
                    <b className="text-left">Category</b>
                    <b className="text-center">Actions</b>
                </div>
                {ElevatorList.length > 0 ? (
                    ElevatorList.map((elevator, index) => (
                        <div key={index} className={`grid grid-cols-[0.6fr_1fr_1.5fr_1fr] items-center gap-6 p-4 border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                            <div className="text-center">
                                {elevator.images.length > 0 ? (
                                    <img
                                        src={`${backendUrl}/images/${elevator.images[0]}`}
                                        alt="Elevator"
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                ) : (
                                    <span className="text-gray-500">No Image</span>
                                )}
                            </div>
                            <p className="font-semibold text-gray-800">{elevator.title}</p>
                            <p className="text-black text-base font-semibold bg-gray-200 px-3 py-1 mr-10 rounded text-center">{elevator.category}</p>
                            <div className="flex justify-center space-x-4">
                                <button className="text-blue-500 hover:text-blue-700" onClick={() => navigate(`/view2/${elevator._id}`)}>View</button>
                                <button className="text-red-500 hover:text-red-700" onClick={() => openModal(elevator._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-500">No elevators available.</div>
                )}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Delete Confirmation"
                className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto mt-24"
                overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center"
            >
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Confirm Deletion</h2>
                    <p className="text-lg text-gray-700 mb-6">Are you sure you want to delete this elevator? This action cannot be undone.</p>
                    <div className="flex justify-center space-x-6 mt-6">
                        <button
                            onClick={closeModal}
                            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={removeElevator}
                            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Elevators;