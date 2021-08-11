import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './style.css';
import axios from 'axios';

const Home = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);

    async function getData(user){
        try {
            const { data } = await axios.get(`https://api.github.com/users/${user}/repos`);
            setError(false);
            window.location.pathname = `/${username}`;
        } catch (error) {
            setError('Unable to find GitHub user, please try again.');
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        getData(username)
    }

    function handleChange(event){
        let newInput = event.target.value;
        setUsername(newInput)
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='user-form'>
            {!error && <TextField label='GitHub Username' onChange={handleChange} value={username} className='input'/>}
            {error && <TextField error label='GitHub Username' helperText = {error} onChange={handleChange} value={username} className='input'/>}
            <Button type='submit' variant='outlined' color='primary' className='button'>
                Submit
            </Button>
        </form>
      </>
    )
}

export default Home;