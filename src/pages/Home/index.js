import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './style.css';
import axios from 'axios';

const Home = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);

    async function getData(user){
        try {
            console.log('trying to fetch ...');
            const { data } = await axios.get(`https://api.github.com/users/${user}/repos`);
            console.log(data);
            setError(false);
            window.location.pathname = `/${username}`;
        } catch (error) {
            setError('Unable to find GitHub user, please try again.');
        }
    }

    function handleSubmit(event){
        console.log(username)
        event.preventDefault();
        getData(username)
        // window.location.pathname = `/${username}`;
    }

    function handleChange(event){
        let newInput = event.target.value;
        setUsername(newInput)
    }

    useEffect(()=>{
        if (!error && username != ""){
            window.location.pathname = `/${username}`;
        }
    }, [error])

    return (
        <>
        <form onSubmit={handleSubmit}>
            {!error && <TextField label='GitHub Username' onChange={handleChange} value={username} className='input'/>}
            {error && <TextField error label='GitHub Username' helperText = {error} onChange={handleChange} value={username} className='input'/>}
            <Button type='submit' variant='outlined' color='primary' onClick={handleSubmit} className='button'>
                Submit
            </Button>
        </form>
      </>
    )
}

export default Home;