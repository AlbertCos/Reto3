import {InputBase, Paper, Button, IconButton } from '@material-ui/core';
import React,{useState, useContext} from 'react';
import ClearIcon from "@material-ui/icons/Clear";
import{makeStyles, fade} from '@material-ui/core/styles';
import storeApi from "../utils/storeApi";



const useStyle = makeStyles((theme)=>({
    card:{
        width:"280px",
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

export default function InputCard({setOpen, listId, type}) {
    const classes = useStyle();
    const {addMoreCard, addMoreList} = useContext(storeApi);
    const [title, setTitle] = useState("");

    const handleOnChange =(e) =>{
        setTitle(e.target.value);
    };
    const handleBtnConfirm = () =>{
        if(type==="card"){
            addMoreCard(title,listId);
            //clean the title wrote, from the input tag.
            setTitle("");
            setOpen(false);
        }
        else{
            addMoreList(title);
            setTitle("");
            setOpen(false);
        }
 
    };
    //close and clean the tag when no active
 

    return (
        <div>
            <div >
            <Paper className={classes.card}>
                <InputBase onChange={handleOnChange} multiline onBlur={()=>setOpen(false)} fullWidth inputProps={{className:classes.input,}} value={title} placeholder={type === 'card' ? "Enter the card title...":"Enter the list title..."}/>
            </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type === "card" ? "+ Add Card" : "+ Add List" }
                </Button>
                <IconButton onClick={()=>setOpen(false)} ><ClearIcon/></IconButton>
            </div>
        </div>
    )
}
