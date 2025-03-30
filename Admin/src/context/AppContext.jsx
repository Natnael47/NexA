import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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

    const value = {
        token, setToken,
        navigate,
        fetchProjectList, list, setList,
        fetchElevatorList, ElevatorList, setElevatorList,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;