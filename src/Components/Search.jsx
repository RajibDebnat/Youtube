import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFormApi } from "../utils/ApiFetchForm";
import { useParams } from "react-router-dom";
import SkelitonComponent from "./SkelitonComponent";

function SearchFeed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [fetching, setFetching] = useState(false);
  const [videos, setVideos] = useState([]);
  const { serchTerm } = useParams();
  console.log(serchTerm);
  useEffect(() => {
    setFetching(true);
    fetchFormApi(`search?part=snippet&q=${serchTerm}`).then((data) => {
      setSelectedCategory(serchTerm);
      setVideos(data.items);
      setFetching(false);
    });
  }, [serchTerm]);

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "#000",
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        {/* searchTerm */}
      </Typography>
      <Stack flexWrap={'wrap'} flexDirection={'row'} gap={2}>

      {fetching ? <SkelitonComponent /> : <Videos videos={videos} />}
      </Stack>
    </Box>
  );
}

export default SearchFeed;
