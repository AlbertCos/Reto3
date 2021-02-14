import React, { useState } from'react';
import SideMenu from './SideMenu';
import TopBar from './TopBar';



export default function Nav(){
    const [openSideMenu,setOpenSideMenu] = useState(false);
  return ( 
  <div>
      <TopBar  setOpenSideMenu={setOpenSideMenu}/>
      <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu}/>
  </div>
  );
}