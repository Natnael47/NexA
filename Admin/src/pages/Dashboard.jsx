import axios from 'axios';
import { Image, Layers, ListOrdered, PackageSearch } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        projectCount: 0,
        elevatorCount: 0,
        categoryCount: 0,
        totalImages: 0,
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get(backendUrl + "/api/elevator/dashboard-status");
                setDashboardData(response.data.data);
                console.log(response.data.data);

            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            }
        };
        fetchDashboardData();
    }, []);

    const iconSize = 50;
    const iconColor = '#22C55E';

    return (
        <div className="m-5 w-full max-w-6.5xl max-h-[90vh]">
            <h1 className="text-3xl font-bold text-gray-800 mb-5">Admin Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
                {[
                    { icon: <Layers size={iconSize} color={iconColor} />, label: 'Projects', value: dashboardData.projectCount },
                    { icon: <PackageSearch size={iconSize} color={iconColor} />, label: 'Elevators', value: dashboardData.elevatorCount },
                    { icon: <ListOrdered size={iconSize} color={iconColor} />, label: 'Categories', value: dashboardData.categoryCount },
                    { icon: <Image size={iconSize} color={iconColor} />, label: 'Total Images', value: dashboardData.totalImages },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        <div className="p-3 bg-[#F1FAF2] rounded-full">{item.icon}</div>
                        <div>
                            <p className="text-2xl font-bold text-gray-700">{item.value}</p>
                            <p className="text-gray-500">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;