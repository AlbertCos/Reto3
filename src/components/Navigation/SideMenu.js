import React from'react';
import {makeStyles} from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';


const useStyles = makeStyles ((theme)=>({}));


export default function SideMenu({setOpenSideMenu,openSideMenu}){
  const classes = useStyles();
  return ( 
  <div>
    <Drawer open={openSideMenu} anchor="right" onClose={()=>setOpenSideMenu(false)} >
        <div className={classes.drawer}>
            <h1>SideBar</h1>
        </div>
    </Drawer>
  </div>
  );
}