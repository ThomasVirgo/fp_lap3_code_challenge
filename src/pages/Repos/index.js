import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RepoCard, RepoModal } from '../../components'
import './style.css'

const Repos = () => {
    const { username } = useParams();
    const [repoInfo, setRepoInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState([]);

    useEffect( async ()=>{
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepoInfo(data);
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
    
    //map each repository to a card component. Need to import.
    const repoCards = repoInfo.map((item, i) => <div onClick={()=>openModal(item)} key={i}><RepoCard repo={item} /></div>); 

    return (
        <div className='repos-container'>
        {loading ? <p>loading...</p> : repoCards}
        {modal ?  <RepoModal repo={modalData} show={closeModal}/>:<></>}
        </div>
    )
}

export default Repos;