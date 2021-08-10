import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Repos = () => {
    const { username } = useParams();
    const [repoInfo, setRepoInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        //make a request to github api and get repos info
        //set repoInfo to the data recieved
        //set loading to false
    }, [])

    //map each repository to a card component. 

    return (
        <h1>Repos Page for {username}</h1>
    )
}

export default Repos;