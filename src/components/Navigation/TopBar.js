import React from'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Button, Toolbar } from '@material-ui/core';

const useStyles = makeStyles ((theme)=>({
  AppBar:{
    background:"None",
  },
  title:{
    flexGrow:1,
  },
  btn:{
    backgroundColor: "#000",
    color:"#fff",
  },
}));


export default function TopBar({setOpenSideMenu}){
  const classes = useStyles();
  return ( 
  <div>
    <AppBar position="static" className={classes.AppBar} elevation={0}>
      <Toolbar>
        <h1 className ={classes.title}>ToDo Today</h1>
        <Button className={classes.btn} onClick={()=>setOpenSideMenu(true)}> 
        Background Settings
        </Button>
      </Toolbar>
    </AppBar>
  </div>
  );
}