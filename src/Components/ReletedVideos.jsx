import React from 'react'
import { fetchFormApi } from '../utils/ApiFetchForm'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Stack,Box,Typography } from '@mui/material'
function ReletedVideos() {
    const [relatedVideos,setRelatedVideos] = useState('');
    const {id} = useParams();
    console.log(relatedVideos)
    useEffect(() => {
        // Fetch related videos using the dynamic video ID from the URL
        fetchFormApi(`search?relatedToVideoId=${id}&part=id,snippet&type=video`)
          .then((data) => setRelatedVideos(data))
          .catch((error) => console.error('Error fetching related videos:', error));
      }, [id]);
  return (
    <div>ReletedVideos</div>
  )
}

export default ReletedVideos