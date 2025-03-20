import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const View = () => {

    const { projectId } = useParams();
    const { fetchProjectList, list, navigate } = useContext(AppContext);

    return (
        <div>

        </div>
    )
}

export default View