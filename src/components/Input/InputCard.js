import {InputBase, Paper, Button, IconButton } from '@material-ui/core';
import React,{useState, useContext} from 'react';
import ClearIcon from "@material-ui/icons/Clear";
import{makeStyles, fade} from '@material-ui/core/styles';
import storeApi from "../utils/storeApi";



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

export default function InputCard({setOpen, listId}) {
    const classes = useStyle();
    const {addMoreCard} = useContext(storeApi);
    const [cardTitle, setcardTitle] = useState("");
    
    const handleOnChange =(e) =>{
        setcardTitle(e.target.value);
    };
    const handleBtnConfirm = () =>{
        addMoreCard(cardTitle,listId);
        setOpen(false);
    };

    return (
        <div>
            <div >
            <Paper className={classes.card}>
                <InputBase onChange={handleOnChange} multiline onBlur={()=>setOpen(false)} fullWidth inputProps={{className:classes.input,}} value={cardTitle} placeholder="Enter the card title..."/>
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>+ Add Card</Button>
                <IconButton onClick={()=>setOpen(false)} ><ClearIcon/></IconButton>
            </div>
        </div>
    )
}
