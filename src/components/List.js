import React from 'react'
import {Paper, Typography, CssBaseline} from '@material-ui/core';
import{makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:'EBECF0',
        marginLeft: theme.spacing(1),
    },
}));

export default function List () {
    const classes = useStyle ();
    return (
        <div>
            <Paper ClassName={classes.root}>
                <CssBaseline/>
                <Typography>
                    Todo
                </Typography>
            </Paper>
        </div>
    );
}
