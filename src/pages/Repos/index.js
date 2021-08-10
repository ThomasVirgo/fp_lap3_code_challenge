import React from 'react';
import { useParams } from 'react-router-dom';

const Repos = () => {
    const { username } = useParams();
    return (
        <h1>Repos Page for {username}</h1>
    )
}

export default Repos;