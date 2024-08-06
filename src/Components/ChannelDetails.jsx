import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";

// import { Box } from "@mui/material";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={`${
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }`}
            alt={channelDetail?.snippet?.title || "channel Profile "}
            sx={{ width: "180px", borderRadius: "50%", height: "180px", mb: 2 }}
          />
          <Typography variant="h6">{channelDetail?.snippet?.title} 
          <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
