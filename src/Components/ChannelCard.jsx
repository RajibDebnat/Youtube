import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";
import { useParams } from "react-router-dom";


// import { Box } from "@mui/material";
 import UserComponent from "./UserComponent";
const ChannelCard = ({ channelDetail, marginTop, id }) => {
 
  

  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <UserComponent  id={id} to={`/channel/${channelDetail?.id?.channelId}`}>
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
            sx={{
              width: "180px",
              borderRadius: "50%",
              height: "180px",
              mb: 2,
              marginTop: marginTop,
              boxShadow: "2px 3px 10px 0 black",
            }}
          />
          <Typography variant="h5">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {channelDetail?.statistics &&
              `Subscriber ${channelDetail?.statistics?.subscriberCount}`}
          </Typography>
        </CardContent>
      </UserComponent>
    </Box>
  );
};

export default ChannelCard;
