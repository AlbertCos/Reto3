import React, { useEffect, useState } from'react';
import {makeStyles} from '@material-ui/core/styles';
import { Drawer, Grow } from '@material-ui/core';
import colors from '../utils/colors';
import { getImages } from '../utils/ImageApi';


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


export default function SideMenu({setOpenSideMenu,openSideMenu, setNewBgImage}){
  const classes = useStyles();
  const [optionColor,setOptionColor]=useState(false);
  const [optionImage,setOptionImage]=useState(false);
  const [images,setImage] = useState([]);

const getListofImage = async()=>{
    const listOfImages = await getImages();
    console.log(listOfImages);
    setImage(listOfImages);
};
    useEffect(()=>{
     getListofImage();
    },[])

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
                    onClick={()=>{setOptionImage(true); setOptionColor(false);}}
                ></div>
                <div 
                    className={classes.box} 
                    style={{
                    backgroundSize:"cover",
                    // backgroundImage:"url",
                    backgroundRepeat:"no-repeat",
                    }}
                    onClick={()=>{setOptionColor(true); setOptionImage(false);}}
                ></div>
            </div>
            {optionImage ? (
            <Grow in={optionImage}>
                <div className={classes.optContainer}>
                    {images.map((image,index)=>{
                        return(
                            <div 
                             key={index} 
                             className={classes.box} 
                             style={{
                             backgroundImage:`url(${image.thumb})`,
                             backgroundSize:"cover",
                             backgroundRepeat:"no-repeat",
                        }}
                        onClick={()=>setNewBgImage(image.url)}
                        ></div>
                    );
                })}
                </div>
            </Grow> 
            ):( //Else
            <Grow in={optionColor}>
                <div className={classes.optContainer}>
                    {colors.map((color,index)=>{
                        return(
                            <div 
                             key={index} className={classes.box} 
                             style={{
                             backgroundColor:color,
                            }}
                            onClick={()=>setNewBgImage(color)}
                        ></div>
                    );
                })}
                </div>
            </Grow>
            
        )}
        </div>
    </Drawer>
  </div>
  );
}