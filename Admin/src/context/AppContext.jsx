import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { backendUrl } from '../App';

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [list, setList] = useState([]);
    const [ElevatorList, setElevatorList] = useState([]);

    const fetchProjectList = async () => {
        const response = await axios.get(backendUrl + "/api/project/list");
        if (response.data.success) {
            setList(response.data.data);
            console.log(response.data.data);
        } else {
            toast.error("Error fetching list");
        }
    };

    const fetchElevatorList = async () => {
        const response = await axios.get(backendUrl + "/api/elevator/list");
        if (response.data.success) {
            setElevatorList(response.data.data);
            console.log(response.data.data);
        } else {
            toast.error("Error fetching list");
        }
    };

    const updateElevator = async (elevatorData) => {
        try {
            const response = await axios.put(`${backendUrl}/api/elevator/update/${elevatorData._id}`, elevatorData);
            if (response.data.success) {
                setElevatorList(prevList => prevList.map(item => item._id === elevatorData._id ? response.data.data : item));
                toast.success("Elevator updated successfully");
            } else {
                toast.error(response.data.message || "Error updating elevator");
            }
        } catch (error) {
            toast.error("Failed to update elevator");
            console.error("Update Elevator Error:", error);
        }
    };

    const value = {
        token, setToken,
        navigate,
        fetchProjectList, list, setList,
        fetchElevatorList, ElevatorList, setElevatorList,
        updateElevator
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
