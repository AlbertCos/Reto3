import { Typography,InputBase } from '@material-ui/core'
import React,{useState} from 'react'

export default function Title() {
    const[open,setOpen] = useState(false);
    return (
        <div>
            {open?(
            <div>
            <InputBase value="Todo"/>
             </div>
            ):(
            <div>
             <Typography onClick={()=>setOpen(!open)}>
                Todo
             </Typography>
             </div>
            )}  
        </div>
    )
}
