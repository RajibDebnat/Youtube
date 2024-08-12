  import { useState, useEffect } from "react";
  import { Link, useParams } from "react-router-dom";
  import ReactPlayer from "react-player";
  import { Typography, Box, Stack } from "@mui/material";
  import { CheckCircle } from "@mui/icons-material";
  import Videos from "./Videos";
  import { demoProfilePicture } from "../utils/constant";
  import { fetchFormApi } from "../utils/ApiFetchForm";
  // import { ClassNames } from "@emotion/react";
  import {CardMedia} from "@mui/material";
  function VideoDetails() {
    const  [videoDetail, setVideoDetail]  = useState('');
    const {snippet,statistics} = videoDetail;
    const {id}= useParams()
    console.log(snippet )
    // console.log(videoDetail);
    useEffect(() => {
      fetchFormApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>setVideoDetail(data.items[0]) );
    }, [id]);
    return (
      <>
        <Box>
          <Stack direction={{ xs: "column",  }}>
            <Box sx={{ width: "100%", }}>
              <ReactPlayer
                playing={true}
                url={`https://www.youtube.com/watch?v=${id} `}
                className="react-player"
                controls
              />
            </Box>
            <Typography variant="h6" sx={{mt:'20px' ,fontWeight:"bold "}}>
            {snippet?.title} 
            </Typography>
            <Stack direction="row" justifyContent={"space-between"} alignItems={'center'} gap={'15px'}>
            <CardMedia
              image={`${
            snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }`}
              alt={snippet?.title || "channel Profile "}
              sx={{
                width: "50px",
                borderRadius: "50%",
                height: "50px",
                mb: 2,
              
                boxShadow: "2px 3px 10px 0 black",
              }}
            />
              <Typography sx={{fontSize:'18px', fontWeight:"bold" }}>{snippet?.channelTitle}</Typography>
            </Stack>
            <Box>
            view {statistics?.viewCount} like
              {statistics?.likeCount}
            </Box>
          </Stack>
        </Box>
      </>
    );
  }

  export default VideoDetails;
