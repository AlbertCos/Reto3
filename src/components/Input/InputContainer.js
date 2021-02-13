import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import{makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    root:{
        marginTop:theme.spacing(2),
    },
    addCard:{
        padding:theme.spacing(1,1,1,2),
        margin: theme.spacing(1),
    },
}));

export default function InputContainer() {
    const classes = useStyle ();

    return (
        <div className={classes.root}>
            <Paper className={classes.addCard}>
                <Typography>
                   + Add a new Card
                </Typography>
            </Paper>
        </div>
    )
}
