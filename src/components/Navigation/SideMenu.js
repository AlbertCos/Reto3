import React, { useState } from'react';
import {makeStyles} from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../utils/colors';


const useStyles = makeStyles ((theme)=>({
    drawer:{
        width: "400px",
    },
    menu:{
        display:"flex",
        justifyContent:"space-around",
        marginTop:theme.spacing(2),
    },
    box:{
        width: "45%" ,
        height: "90px",
        backgroundColor:"blue",
        borderRadius:"9px",
        marginBottom:theme.spacing(2),
    },
    optContainer:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        marginTop:theme.spacing(2),
    },
}));


export default function SideMenu({setOpenSideMenu,openSideMenu}){
  const classes = useStyles();
  const [optionColor,setOptionColor]=useState(false);
  const [optionImage,setOptionImage]=useState(false);



  return ( 
  <div>
    <Drawer open={openSideMenu} 
            anchor="right" 
            onClose={()=>setOpenSideMenu(false)} 
            >
        <div className={classes.drawer}>
            <div className={classes.menu}>
                <div 
                    className={classes.box} 
                    style={{
                    backgroundSize:"cover",
                    // backgroundImage:"url",
                    backgroundRepeat:"no-repeat",
                    }}
                ></div>
                <div 
                    className={classes.box} 
                    style={{
                    backgroundSize:"cover",
                    // backgroundImage:"url",
                    backgroundRepeat:"no-repeat",
                    }}
                    onClick={()=>setOptionColor(true)}
                ></div>
            </div>
            <Grow in={optionColor}>
                <div className={classes.optContainer}>
                    {colors.map((color,index)=>{
                        return(
                            <div 
                             key={index} className={classes.box} 
                             style={{
                             backgroundColor:color,
                        }}></div>
                    );
                })}
                </div>
            </Grow>
        </div>
    </Drawer>
  </div>
  );
}