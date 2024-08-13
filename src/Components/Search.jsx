import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {  Videos } from "./index";
import { fetchFormApi } from "../utils/ApiFetchForm";
import { useParams } from "react-router-dom";

function SearchFeed() {
  // const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
const {serchTerm} = useParams();
console.log(serchTerm)
  useEffect(() => {
    fetchFormApi(`search?part=snippet&q=${serchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [serchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        {} <span style={{ color: "#F31503" }}>Videos</span>
        {/* searchTerm */}
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
