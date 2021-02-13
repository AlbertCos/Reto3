import {InputBase, Paper, Button, IconButton } from '@material-ui/core';
import React from 'react';
import ClearIcon from "@material-ui/icons/Clear";
import{makeStyles, fade} from '@material-ui/core/styles';



const useStyle = makeStyles((theme)=>({
    card:{
        margin:theme.spacing(0,1,1,1),
        paddingBottom:theme.spacing(4),
        padding:theme.spacing(1,1,1,0),
    },
    input:{
        margin:theme.spacing(1),
    },
    btnConfirm:{
        background:"#5AAC44",
        color:"#fff",
        "&:hover":{
            background:fade("#5AAC44",0.25),
        }
    },
    confirm:{
        margin:theme.spacing(0,1,1,1),
    }
}));

export default function InputCard({setOpen}) {
    const classes = useStyle();
    return (
        <div>
            <div >
            <Paper className={classes.card}>
                <InputBase multiline onBlur={()=>setOpen(false)} fullWidth inputProps={{className:classes.input,}} placeholder="Enter the card title..."/>
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={()=>setOpen(false)}>+ Add Card</Button>
                <IconButton onClick={()=>setOpen(false)} ><ClearIcon/></IconButton>
            </div>
        </div>
    )
}
