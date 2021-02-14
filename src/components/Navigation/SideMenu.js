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
    optionContainer:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        marginTop:theme.spacing(2),
    },
}));


export default function SideMenu({setOpenSideMenu,openSideMenu, setNewBgImage}){
  const classes = useStyles();
  const [openOptionColor,setOpenOptionColor]=useState(false);
  const [openOptionImage,setOpenOptionImage]=useState(false);
  const [images,setImage] = useState([]);

const getListofImage = async()=>{
    const listOfImages = await getImages();
    console.log(listOfImages);
    setImage(listOfImages);
};
    useEffect(()=>{
     getListofImage();
    },[]);

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
                    backgroundImage:"url(http://wallup.net/wp-content/uploads/2016/01/137302-nature-Canada-landscape-lake-forest-mountain.jpg)",
                    backgroundRepeat:"no-repeat",
                    }}
                    onClick={()=>{setOpenOptionImage(true); setOpenOptionColor(false);}}
                ></div>
                <div 
                    className={classes.box} 
                    style={{
                    backgroundSize:"cover",
                    backgroundImage:"url(https://totenart.com/noticias/wp-content/uploads/2015/06/colores-espectro-noticias-totenart.png)",
                    backgroundRepeat:"no-repeat",
                    }}
                    onClick={()=> {setOpenOptionImage(false); setOpenOptionColor(true);}}
                ></div>
            </div>
            {openOptionImage ? (
            <Grow in={openOptionImage}>
                <div className={classes.optionContainer}>
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
            <Grow in={openOptionColor}>
                <div className={classes.optionContainer}>
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