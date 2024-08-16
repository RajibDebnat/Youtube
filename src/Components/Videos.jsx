import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router-dom";

function Videos({ videos }) {
  const { serchTerm } = useParams();

  return (
    <Stack direction="row" flexWrap="wrap" mx={'auto'} justifyContent="" gap={1.5}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ margin: "0", padding: "0" }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
