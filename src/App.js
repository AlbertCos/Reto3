import React, {useState} from 'react';
import List from "./components/List";
import store from "./components/utils/store";

export default function App(){
  const [data,setData]=useState(store);
  return(
    <div>
      {data.listIds.map((listId)=>(<List/>))}
    </div>
    
  );
}
