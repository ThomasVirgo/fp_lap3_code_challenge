import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './style.css';

const Home = () => {
    const [username, setUsername] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        window.location.pathname = `/${username}`;
    }

    function handleChange(event){
        let newInput = event.target.value;
        setUsername(newInput)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <TextField label='GitHub Username' onChange={handleChange} value={username} className='input'/>
            <Button type='submit' variant='outlined' color='primary' onClick={handleSubmit} className='button'>
                Submit
            </Button>
        </form>
      </>
    )
}

export default Home;