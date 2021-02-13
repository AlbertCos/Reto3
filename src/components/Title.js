import { Typography,InputBase } from '@material-ui/core';
import React,{useState,useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import storeApi from "./utils/storeApi";

const useStyle = makeStyles((theme)=>({
    root:{
        width:'300px',
        backgroundColor:'EBECF0',
        marginLeft: theme.spacing(1),
    },
    editableTitle:{
        marginLeft:theme.spacing(1),
        flexGrow:1,
        fontSize:"1.2rem",
        fontWeight:"bold",
    },
    editableTitleContainer:{
        margin:theme.spacing(1),
        display:"flex",
    },
    input:{
        fontSize:"1.2rem",
        fontWeight:"bold",
        margin: theme.spacing(1),
        "&:focus":{
            backgroundColor:"#ddd",
        }
    }
}));

export default function Title({title,listId}) {
    const[open,setOpen] = useState(false);
    const [newTitle,setNewTitle] = useState(title);
    const {updateListTitle} = useContext(storeApi);
    const classes = useStyle();

    const handleOnchange = (e)=>{
        setNewTitle(e.target.value);
    };

    const handleOnBlur =()=>{
        updateListTitle(newTitle,listId);
        setOpen(false);
    };

    return (
        <div>
            {open?(
            <div>
            <InputBase onChange={handleOnchange} autoFocus value={newTitle} inputProps={{className:classes.input,}} fullWidth onBlur = {handleOnBlur}/>
             </div>
            ):(
            <div className={classes.editableTitleContainer}>
             <Typography onClick={()=>setOpen(!open)} className={classes.editableTitle}>
                {title}
             </Typography>
             <MoreHorizIcon />
             </div>
            )}  
        </div>
    )
}
