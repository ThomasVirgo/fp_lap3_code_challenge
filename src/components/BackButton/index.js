import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './style.css'

const BackButton = () => {
    const history = useHistory();
    return (
        <ArrowBackIcon onClick={history.goBack}/>
    )
}

export default BackButton;