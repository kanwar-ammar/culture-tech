import "./LiveSession.css"
import "./VirtualStudio.css"
import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
    h5:{
        fontSize:30,
        fontWeight:20,
    }
  });

const weddingDances=[
{vidId:"https://www.youtube.com/embed/a-y-BKLBy2g"},
{vidId:"https://www.youtube.com/embed/y8VmIV_BCS8"},
{vidId:"https://www.youtube.com/embed/cN1vniebhzM"},

]

const danceStudio=[
{vidId:"https://www.youtube.com/embed/W1z4zDlpxRM"},
{vidId:"https://www.youtube.com/embed/xJ5ct84-nmw"},
{vidId:"https://www.youtube.com/embed/zUDXj8REpAI"},
{vidId:"https://www.youtube.com/embed/0-gNHICx8ik"},

]

const VirtualStudio =() =>{
return(
    <ThemeProvider theme={theme}>
    <div className='VirtualStudioMain'>
        <div className='VirtualStudioContainer'>
            <div>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'#46a2a6', padding:"20px",float:"left" ,display:"flex"}} >
                Wedding Dances
                </Typography>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px" ,float:"right"}} >
                <Link to="/SeeAll" state={{ data: weddingDances}}   >SeeMore</Link>
                </Typography>
            </div>  
            {weddingDances.map(item =>(
            <CardMedia component="iframe" sx={{ width:"100%" ,height:400 ,border:"none", marginTop:"40px"}} image={item.vidId} alt="Live from space album cover" />
            ))}
            </div>
        <div className='VirtualStudioContainer'>
            <div>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'#46a2a6', padding:"20px",float:"left" ,display:"flex"}} >
                Dance Studio
                </Typography>
                <Typography gutterBottom variant="h5" component="div"   sx={{color:'white', padding:"20px" ,float:"right"}} >
                <Link to="/SeeAll" state={{ data: danceStudio}}   >SeeMore</Link>
                </Typography>
            </div>
            {danceStudio.map(item =>(
               
            <CardMedia component="iframe" sx={{ width:"100%" ,height:400 ,border:"none", marginTop:"40px"}} image={item.vidId} alt="Live from space album cover" />
            ))}
        </div>
    </div>
    </ThemeProvider>
)
}

export default VirtualStudio;