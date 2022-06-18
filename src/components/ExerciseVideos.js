import React from 'react';
import { Box, Stack, Typography} from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name}) => {

 console.log(exerciseVideos);

if(!exerciseVideos.length) return 'Loading...';

  return (
   <Box sx={{ marginTop:{ lg: '200px', xs: '20px'}}} p="20px" >
     <Typography>
      Watch <span style={{color:'#ff2625', textTrasnform:'capitalize'}}>{name}</span> exercise videos 
     </Typography>
     <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" 
        sx={{
          flexDirection: { lg:'row'},
          gap: { lg:'110px', xs:'0'}
        }}
     >
     {exerciseVideos?.slice(0,6).map((item,index) => (
       <a
         key={index}
         className="exerciseVideo"
         href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
         target="_blank"
         rel="noreferrer"
         style={{textDecoration: 'none'}}
       >
         <img  src={item.video.thumbnails[0].url} alt={item.video.title} />
         <Box>
             <Typography variant='h7' color="#000">
                 {item.video.title}
             </Typography>
             <Typography variant='h8' color="#000">
                 {item.video.channelName}
             </Typography>
         </Box>
       </a>
     ))}
     </Stack>
   </Box>
   
  )
}

export default ExerciseVideos