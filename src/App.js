import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import List from "./components/List";
import store from "./components/utils/store";
import storeApi from "./components/utils/storeApi";

export default function App(){
  const [data,setData]=useState(store);
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
    <div>
      {data.listIds.map((listId)=>{

      const list = data.lists[listId];
      return <List list={list} key={listId}/>;

      })}
    </div>
    </storeApi.Provider>
  );
}
