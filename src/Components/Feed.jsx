import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SideBar, Videos } from "./index";
import { fetchFormApi } from "../utils/ApiFetchForm";
import { Skeleton } from "@mui/material";
import SkelitonComponent from "./SkelitonComponent";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetchFormApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setIsFetching(false);
      })
      .catch((err) => {
        setIsFetching(true);
        console.log(err);
      });
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sm: "column", md: "row" },
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          px: { sm: "0", md: "2" },
          height: { sm: "auto", md: "92vh" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#FFF" }}
        >
          Copyright 2024 RD Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        {isFetching ? (
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            <SkelitonComponent times={10} />
          </Stack>
        ) : (
          <Videos videos={videos} />
        )}
      </Box>
    </Stack>
  );
}

export default Feed;
