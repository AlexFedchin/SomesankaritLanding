import React from "react";
import { Box, Typography, Container } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  return (
    <Box
      id="intro"
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
        width: "100%",
      }}
    >
      {/* Video Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -3,
          filter: isMobile ? "brightness(1.05)" : "brightness(0.85)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        >
          <source
            src={
              isMobile ? "/video/intro-bg-mobile.mp4" : "/video/intro-bg.mp4"
            }
            type="video/mp4"
          />
          {t("intro.noVideo")}
        </video>
      </Box>

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: 2,
          flexDirection: "column",
          pt: "20vh",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "1.5rem" : isTablet ? "2.5rem" : "3.5rem",
            textShadow: "0 0 16px var(--off-black)",
          }}
        >
          {t("intro.title")}
        </Typography>
        <Typography
          sx={{
            fontSize: isMobile ? "1rem" : isTablet ? "1.25rem" : "1.5rem",
            letterSpacing: 2,
            textShadow: "0 0 8px var(--off-black), 0 0 16px var(--off-black)",
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
