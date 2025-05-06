import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Or useNextRouter if you're using Next.js

const ErrorPage = () => {
  const navigate = useNavigate(); // For Next.js, use useRouter from 'next/router'

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      px={2}
    >
      <Typography variant="h4" gutterBottom>
        Something went wrong in the application.
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleGoHome}>
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
