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
        display: 'flex'
    },
    language: {
        alignSelf: 'center',
        height:'100%'
    }

});  

const RepoCard = ({repo}) => {
    const classes = useStyles();
    return (
        <Card  className={classes.root} >
            <CardContent className={classes.info}>
                <div>
                    <Typography color="textSecondary" gutterBottom>
                        {repo.owner.login}
                    </Typography >
                    <Typography variant="h6" component="h3">
                        {repo.name}
                    </Typography>
                </div>
                <Typography className={classes.language} variant="overline" component="p">
                        {repo.language}
                </Typography>
            </CardContent>
        </Card>        
    );
}

export default RepoCard;