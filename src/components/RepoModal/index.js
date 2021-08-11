import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: "white",
        border: '2px solid #000',
        boxShadow: 5,
        padding: 5,
    },
    giticon:{
        marginRight:'10px',
    }
});  

const RepoModal = ({repo,show}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);
    
    const handleClose = () => {      
        setOpen(false);
        show();
    };

    const transformtitle=()=>{
        const text=repo.name.replace(/_|-/gi,' ')
        console.log(text);
        return text;
    }

     
    const body = (
        <div className={classes.paper}>
            <Typography variant="h5" component="h2">{repo.name.replaceAll(/_|-/gi,' ')}</Typography>
            <Typography  component="p">{repo.description}</Typography>
            <Button variant="contained" color="primary" href={repo.html_url} target='_blank'>
                <GitHubIcon className={classes.giticon}/>  See in github 
            </Button>
        </div>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={classes.modal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    )
}

export default RepoModal;