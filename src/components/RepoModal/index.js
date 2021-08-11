import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
    
    paper: {
        width: 400,
        backgroundColor: "white",
        border: '2px solid #000',
        boxShadow: 5,
        padding: 5,
      },

});  

const RepoModal = ({repo,show}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(true);
    
    const handleClose = () => {      
        setOpen(false);
        show();
      };
    const body = (
        <div className={classes.paper}>
          <h2 id="server-modal-title">{repo.name}</h2>
          <p id="server-modal-description">{repo.description}</p>
        </div>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    )
}

export default RepoModal;