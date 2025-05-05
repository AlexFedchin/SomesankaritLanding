import { Box, Stack, Typography } from "@mui/material";
import DefaultContainer from "../components/DefaultContainer";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const About = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  return (
    <DefaultContainer
      id="whatWeDo"
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
            variant="styled-title"
            fontFamily="AccentFont"
            marginBottom={4}
          >
            {t("whatWeDo.title").toUpperCase()}
          </Typography>
          <Typography
            variant="body-text"
            sx={{
              textShadow:
                "0 0 16px var(--off-black), 0 0 24px var(--off-black), 0 0 32px var(--off-black), 0 0 48px var(--off-black)",
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: t("whatWeDo.description"),
              }}
            />
          </Typography>
        </Box>
      </Stack>
      <Box
        component="img"
        src="/img/roman-mirko-light.webp"
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
