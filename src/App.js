import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import List from "./components/List";
import store from "./components/utils/store";
import storeApi from "./components/utils/storeApi";
import InputContainer from "./components/Input/InputContainer";
import{makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles((theme)=>({
  root:{
    display:"flex",
    minheight:"100vh",
    background:"#383e56",
  }
}));



export default function App(){
  const [data,setData]=useState(store);
  const classes = useStyle();
  const  addMoreCard = (title,listId) =>{

    //Generating the unique ID for each card
    const newCardId = uuid();
    const newCard = {
      id:newCardId,
      title,
    };
    const list = data.lists[listId];
    list.cards=[...list.cards,newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  return(
    <storeApi.Provider value={{addMoreCard}}>
    <div className = {classes.root}>
      
      {data.listIds.map((listId)=>{

      const list = data.lists[listId];
      return <List list={list} key={listId}/>;

      })}
      <InputContainer type="list"/>
    </div>
    </storeApi.Provider>
  );
}
