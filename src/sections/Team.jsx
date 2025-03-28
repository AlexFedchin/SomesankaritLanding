import { Box, Typography } from "@mui/material";
import PersonCard from "../components/PersonCard";
import DefaultContainer from "../components/DefaultContainer";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Image Header */}
      <Box
        component="img"
        src="/img/banner.webp"
        sx={{
          width: "100vw",
          height: isMobile ? "200px" : isTablet ? "300px" : "400px",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(50%)",
          position: "absolute",
          top: 0,
          left: 0,
          display: "grid",
          placeItems: "center",
          zIndex: 2,
          boxShadow:
            "0 -10px 10px rgba(0, 0, 0, 0.2), 0 -20px 20px rgba(0, 0, 0, 0.2)",
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
          zIndex: 5,
          my: isMobile
            ? "calc((200px - 1.5rem) / 2 - 3px)"
            : isTablet
            ? "calc((300px - 2rem) / 2 - 3px)"
            : "calc((400px - 2.5rem) / 2 - 3px)",
        }}
      >
        {t("meetTheTeam.title").toUpperCase()}
      </Typography>

      {/* Team Cards */}
      <DefaultContainer sx={{ mt: isMobile ? 1 : isTablet ? 2 : 4 }}>
        <PersonCard
          image="/img/team/mirko.webp"
          firstName="Mirko"
          secondName="Asell"
          roles={["Star", "Cameraman"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin
          vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur
          sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula.
          Proin vulputate condimentum lacus, a tristique mi finibus a.
          Vivamus lobortis odio vel."
        />

        <PersonCard
          image="/img/team/roman.webp"
          firstName="Roman"
          secondName="Aliev"
          roles={["Star", "Role", "Manager"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin
          vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur
          sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula.
          Proin vulputate condimentum lacus, a tristique mi finibus a.
          Vivamus lobortis odio vel."
        />

        <PersonCard
          image="/img/team/aino.webp"
          firstName="Aino"
          secondName="Skyttälä"
          roles={["Assistant", "Accountant"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin
          vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur
          sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula.
          Proin vulputate condimentum lacus, a tristique mi finibus a.
          Vivamus lobortis odio vel."
        />

        <PersonCard
          image="/img/team/santeri.webp"
          firstName="Santeri"
          secondName="Koskinen"
          roles={["Accountant", "CEO"]}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin
          vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur
          sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula.
          Proin vulputate condimentum lacus, a tristique mi finibus a.
          Vivamus lobortis odio vel."
        />
      </DefaultContainer>
    </Box>
  );
};

export default Team;
