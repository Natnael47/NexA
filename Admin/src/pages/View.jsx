import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { backendUrl } from '../App';
import { AppContext } from '../context/AppContext';

const View = () => {
    const { projectId } = useParams();
    const { fetchProjectList, list } = useContext(AppContext);

    useEffect(() => {
        fetchProjectList();
    }, []);

    // Find the project by ID
    const project = list.find(item => item._id === projectId);

    if (!project) {
        return <div className="flex items-center justify-center h-screen text-xl font-semibold">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">{project.title}</h1>

            {/* Project Image Gallery */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {project.images.length > 0 ? (
                    project.images.map((image, index) => (
                        <img
                            key={index}
                            src={`${backendUrl}/images/${image}`}
                            alt={`Project ${index + 1}`}
                            className="w-48 h-36 rounded-lg object-cover shadow-md border border-gray-300"
                        />
                    ))
                ) : (
                    <span className="text-gray-500">No Images</span>
                )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg"><strong>Category:</strong> {project.category}</p>
                <p className="text-lg"><strong>Status:</strong> <span className="text-green-500">{project.status}</span></p>
                <p className="text-lg"><strong>Address:</strong> {project.address}</p>
                <p className="text-lg"><strong>Description:</strong> {project.description}</p>
                <p className="text-lg"><strong>Google Map:</strong> <a href={project.googleMapLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Map</a></p>
                <p className="text-lg"><strong>Completion Date:</strong> {project.completionDate ? new Date(project.completionDate).toDateString() : 'N/A'}</p>
                <p className="text-lg"><strong>Start Date:</strong> {project.startDate ? new Date(project.startDate).toDateString() : 'N/A'}</p>
            </div>
        </div>
    );
};

export default View;
