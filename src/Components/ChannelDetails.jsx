import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
// import {Videos,ChannelC} from './'
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFormApi } from "../utils/ApiFetchForm";
function ChannelDetails() {
  const { id } = useParams();
  const [channelDetail, setChannelDetails] = useState(null);

  
  // console.log(getBanner)
  const [videos, setVideos] = useState([]);
  console.log(channelDetail);
  // brandingSettings image bannerExternalUrl

  useEffect(() => {
    fetchFormApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFormApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"} sx={{ backgroundColor: "#000" }}>
      <Box>
        {/* <div
          style={{
            background:
              "linear-gradient(90deg, rgba(76,65,231,1) 0%, rgba(203,55,210,1) 56%, rgba(20,60,255,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        /> */}
        <CardMedia
        image={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
        alt={channelDetail?.snippet?.title}
        sx={{
          width: "100%",
          // borderRadius: "50%",
          height: "300px",
          mb: 2,
          // position:"absolute",
          top:"0",
          // marginTop: marginTop,
          zIndex: 10,
          objectFit:'fill',
          boxShadow: "2px 3px 10px 0 black",
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} id={id} />
      </Box>
      <Box display={"flex"} p="2" justifyContent={"center"}>
        <Box sx={{ mr: { sm: "110px" } }} />

        <Videos videos={videos}  />
      </Box>
    </Box>
  );
}

export default ChannelDetails;
