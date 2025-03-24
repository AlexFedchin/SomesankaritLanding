import { Box, Typography } from "@mui/material";
import PersonCard from "../components/PersonCard";
import useScreenSize from "../hooks/useScreenSize";
import DefaultContainer from "../components/DefaultContainer";

const Team = () => {
  const { isMobile, isTablet } = useScreenSize();

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
        src="/img/team.JPG"
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
          zIndex: 0,
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
          zIndex: 5,
          my: isMobile
            ? "calc((200px - 1.5rem) / 2 - 2px)"
            : isTablet
            ? "calc((300px - 2rem) / 2 - 2px)"
            : "calc((400px - 2.5rem) / 2 - 2px)",
        }}
      >
        MEET THE TEAM
      </Typography>

      {/* Team Cards */}
      <DefaultContainer sx={{ mt: isMobile ? 1 : isTablet ? 2 : 4 }}>
        <PersonCard
          image="/img/team/mirko.JPG"
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
          image="/img/team/roman.JPG"
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
          image="/img/team/aino.JPG"
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
          image="/img/team/santeri.JPG"
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
