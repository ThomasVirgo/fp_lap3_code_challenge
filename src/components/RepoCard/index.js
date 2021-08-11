import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: '100%',
      cursor: "pointer",
      
    },
    info: {
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    language: {
        alignSelf: 'flex-end',
        justifySelf:'end',
        height:'100%',
    }

});  
const RepoCard = ({repo}) => {
    const classes = useStyles();
    
    return (
        <Card role='card' className={classes.root} >
            <CardContent className={classes.info}>
                <div>
                    <Typography role='Username' color="textSecondary" gutterBottom>
                        {repo.owner.login}
                    </Typography >
                    <Typography role='Title' variant="h6" component="h3">
                        {repo.name.replaceAll(/_|-/gi,' ')}
                    </Typography>
                </div>
                <Typography role='MainTecnology' className={classes.language}  variant="overline" component="p">
                        {repo.language}
                </Typography>                
            </CardContent>
        </Card>        
    );
}

export default RepoCard;