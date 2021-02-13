import {InputBase, Paper, Button, IconButton } from '@material-ui/core';
import React from 'react';
import ClearIcon from "@material-ui/icons/Clear";
import{makeStyles} from '@material-ui/core/styles';



// const useStyle = makeStyles((theme)=>({
//     root:{
//         width:'300px',
//         backgroundColor:'#EBECF0',
//         marginLeft: theme.spacing(1),
//     },
// }));

export default function InputCard() {
    return (
        <div>
            <div>
            <Paper>
                <InputBase multiline fullWidth/>
            </Paper>
            </div>
            <div>
                <Button>+ Add Card</Button>
                <IconButton><ClearIcon/></IconButton>
            </div>
        </div>
    )
}
