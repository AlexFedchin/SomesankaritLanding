import React from "react";
import { Box, Typography, Container } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const Intro = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source src="/video/intro-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "2rem" : isTablet ? "3rem" : "4rem",
          }}
        >
          Elevate Your Brand with Social Media Marketing
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
