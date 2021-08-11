import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RepoCard, RepoModal, SearchForm } from '../../components'
import './style.css'

const Repos = () => {
    const { username } = useParams();
    const [repoInfo, setRepoInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);

    useEffect( async ()=>{
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepoInfo(data);
        setFilteredRepos(data);
        setLoading(false);
    }, [])

    function closeModal(){
        setModal(false);
        setModalData([]);
    }
    function openModal(item){
        setModal(true);
        setModalData(item);
    }

    function handleSearch(input){
        let lowerInput = input.toLowerCase();
        let filtered = repoInfo.filter(repo => repo.name.toLowerCase().includes(lowerInput));
        setFilteredRepos(filtered);
    }
    
    //map each repository to a card component. Need to import.
    const repoCards = filteredRepos.map((item, i) => <div className = 'card-container' onClick={()=>openModal(item)} key={i}><RepoCard repo={item} /></div>); 

    return (
        <div className='repos-container'>
            <div className='header'>
                <h1>Hi {username}! </h1>
                <SearchForm handleSearch = {handleSearch}/>
            </div>
            {loading ? <p>loading...</p> : repoCards}
            {modal ?  <RepoModal repo={modalData} show={closeModal}/>:<></>}
        </div>
    )
}

export default Repos;