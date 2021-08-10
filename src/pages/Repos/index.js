import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RepoCard } from '../../components'
import './style.css'

const Repos = () => {
    const { username } = useParams();
    const [repoInfo, setRepoInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( async ()=>{
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepoInfo(data);
        setLoading(false);
    }, [])

    function addModal(data){
        console.log('clicked');
        console.log(data);
    }

    //map each repository to a card component. Need to import.
    const repoCards = repoInfo.map((item, i) => <div onClick={()=>addModal(item)} key={i}><RepoCard repo={item} /></div>); 

    return (
        <div className='repos-container'>
        {loading ? <p>loading...</p> : repoCards}
        </div>
    )
}

export default Repos;