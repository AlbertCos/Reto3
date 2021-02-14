import React, { useState } from'react';
import {makeStyles} from '@material-ui/core/styles';
import Wrapper from './components/wrapper';
import Nav from './components/Navigation/Nav';

const useStyles = makeStyles ((theme)=>({
  // root:{
  //    background:"#383e56",
  // },
}));


export default function App(){
  const classes = useStyles();
  const [backgroundImage,setBackgroundImage]=useState("green");
  return ( 
  <div className={classes.root}
    style={{
      backgroundColor:backgroundImage,
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    }}>
    <Nav setBackgroundImage = {setBackgroundImage}/>
    <Wrapper/>
  </div>
  );
}