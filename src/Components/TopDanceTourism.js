import "./TopDanceTourism.css"
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from './videoModal';
import { Link } from 'react-router-dom';
import 'react-modal-video/scss/modal-video.scss';


const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
      h5:{
        fontSize:30,
        fontWeight:20,
    }
    },
   
  });

  const someList=[{
    id:1,
    title:"Power of a single decision ",
    image:require("../Images/talk_1.jpg"),
    link:"https:/293489023i4092kdmls",
    vidId:"EeT_0AXvZmk",
    author:"Nighat Chaodhary"
},
{id:2,
    title:"Power of a single decision ",
    image:require("../Images/talk_1.jpg"),
    link:"https:/293489023i4092kdmls",
    vidId:"7_WuTK9fH9Y",
    author:"Nighat Chaodhary"
},
{id:2,
    title:"Power of a single decision ",
    image:require("../Images/talk_1.jpg"),
    link:"https:/293489023i4092kdmls",
    vidId:"FzcfZyEhOoI",
    author:"Nighat Chaodhary"
}]



const someTitle="Podcast"


const TopDanceTourism =() =>{
return(
    <ThemeProvider theme={theme}>
    <div className='DTMain'>
        <div className='DTContainer'>
            <div>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'#624EAA', padding:"20px",float:"left" ,display:"flex"}} >
                Dance Tourism
                </Typography>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px" ,float:"right"}} >
                <Link to="/SeeAllSubs" >See All</Link>
                </Typography>
            </div>  
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none",marginTop:"40px"}} image="https://www.youtube.com/embed/12ogr54VhUM" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/7EP1Yk0rNnA" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/0v4Dzz9PsIg" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/8GbxmGKUQRc" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/fw1QAcnYw2c" alt="Live from space album cover" />
        </div>
        <div className='DTContainer'>
            <div>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'#624EAA', padding:"20px",float:"left" ,display:"flex"}} >
                Tour On Demand
                </Typography>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px" ,float:"right"}} >
                <Link to="/SeeAll" state={{data:someList}} >See All</Link>
                </Typography>
            </div>  
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none",marginTop:"40px"}} image="https://www.youtube.com/embed/EeT_0AXvZmk" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/EnyzXbZY3-I" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/Zn6yKRSPGhg" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/LISuohQzEeA" alt="Live from space album cover" />
            <CardMedia component="iframe" sx={{ width:"100%" ,height:300 ,border:"none", marginTop:"40px"}} image="https://www.youtube.com/embed/j99qxx4nCWc" alt="Live from space album cover" />
        </div>
    </div>
    </ThemeProvider>
)
}

export default TopDanceTourism;