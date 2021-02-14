import React from'react';
import {makeStyles} from '@material-ui/core/styles';
import Wrapper from './components/wrapper';
import Nav from './components/Navigation/Nav';

const useStyles = makeStyles ((theme)=>({
  root:{
     background:"#383e56",
  },
}));


export default function App(){
  const classes = useStyles();
  return ( 
  <div className={classes.root}>
    <Nav/>
    <Wrapper/>
  </div>
  );
}