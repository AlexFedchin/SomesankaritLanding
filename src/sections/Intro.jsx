import React from "react";
import { Box, Typography, Container } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

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
        {/* Fallback */}
        {t("intro.noVideo")}
      </Box>
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: 3,
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
          {t("intro.title")}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "1rem" : isTablet ? "1.25rem" : "1.5rem",
            letterSpacing: 2,
            fontWeight: 200,
          }}
        >
          {t("intro.subtitle")}
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
