import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const SearchForm = ({handleSearch}) => {

    const [input, setInput] = useState("");

    function handleChange(e){
        let newInput = e.target.value;
        setInput(newInput);
        handleSearch(newInput);
    };

    return (
        <form onSubmit={handleSearch}>
            <TextField label='Search...' onChange={handleChange} value={input} />
        </form>
    )
}

export default SearchForm;
