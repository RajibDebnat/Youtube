import React from 'react'
import { fetchFormApi } from '../utils/ApiFetchForm'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Stack,Box,Typography } from '@mui/material'
import VideoCard from './VideoCard'
function ReletedVideos({suggestedVideo}) {
    

  console.log(suggestedVideo)
   
  return (
    <Box  sx={{padding:{md:0,xs:'20px'},}} >
      <Stack   direction="row" flexWrap="wrap" justifyContent={'center'} gap={2} >

{
  suggestedVideo.map(data =><Box>
    <VideoCard video={data}/>

  </Box>)
}

    </Stack>
    </Box>
  )
}

export default ReletedVideos