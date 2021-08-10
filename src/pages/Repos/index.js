import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Repos = () => {
    const { username } = useParams();
    const [repoInfo, setRepoInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( async ()=>{
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepoInfo(data);
        setLoading(false);
    }, [])

    //map each repository to a card component.
    const repoCards = repoInfo.map((item, i) => <p key={i}>{item.name}</p>); 

    return (
        <>
        {loading ? <p>loading...</p> : repoCards}
        </>
    )
}

export default Repos;