import { Box, Stack, Typography } from "@mui/material";
import DefaultContainer from "../components/DefaultContainer";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const About = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  return (
    <DefaultContainer
      id="about"
      sx={{
        mb: -4,
        position: "relative",
        pb: isMobile ? 8 : isTablet ? 10 : 12,
        pt: isMobile ? 4 : isTablet ? 6 : 8,
      }}
    >
      <Stack
        direction={isMobile || isTablet ? "column" : "row"}
        spacing={isMobile ? 2 : 4}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--background)",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4.5rem",
              fontFamily: "AccentFont",
              color: "var(--primary)",
              marginBottom: "1rem",
              textShadow: "0 0 16px var(--primary)",
            }}
          >
            {t("whatWeDo.title").toUpperCase()}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
              lineHeight: 1.6,
              color: "var(--text)",
              textShadow:
                "0 0 16px var(--off-black), 0 0 24px var(--off-black), 0 0 32px var(--off-black), 0 0 48px var(--off-black)",
            }}
          >
            {t("whatWeDo.description")}
          </Typography>
        </Box>
      </Stack>
      <Box
        component="img"
        src="/img/roman-mirko.webp"
        sx={{
          position: "absolute",
          bottom: 0,
          right: isMobile ? "" : isTablet ? "10%" : "10%",
          width: "auto",
          height: isMobile ? "300px" : isTablet ? "350px" : "400px",
          objectFit: "cover",
          objectPosition: "center",
          marginTop: isMobile || isTablet ? "2rem" : "0",
          zIndex: -1,
          userSelect: "none",
        }}
      />
    </DefaultContainer>
  );
};

export default About;
