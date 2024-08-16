import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useNavigate } from "react-router-dom";

function Error({ message,  }) {
    const navigate = useNavigate();
    function onRetry(){
        navigate('/')
    }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        backgroundColor: '#f8d7da',
        borderRadius: 2,
        p: 3,
        color: '#721c24',
        boxShadow: 3,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 40, mb: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {message || "The item you're looking for isn't available."}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={onRetry}
        sx={{ mt: 2 }}
      >
        Try Again
      </Button>
    </Box>
  );
}

export default Error;
