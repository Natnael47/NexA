import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { backendUrl } from "../App";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const navigate = useNavigate();
    const [ElevatorList, setElevatorList] = useState([]);

    const fetchElevatorList = async () => {
        const response = await axios.get(backendUrl + "/api/elevator/list");
        if (response.data.success) {
            setElevatorList(response.data.data);
            //console.log(response.data.data);
        } else {
            toast.error("Error fetching list");
        }
    };

    const value = {
        navigate,
        fetchElevatorList, ElevatorList, setElevatorList,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;