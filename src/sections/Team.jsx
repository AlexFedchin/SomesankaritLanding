import { Box, Typography } from "@mui/material";
import PersonCard from "../components/PersonCard";
import DefaultContainer from "../components/DefaultContainer";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  const teamMembers = [
    {
      image: "/img/team/mirko.webp",
      firstName: "Mirko",
      secondName: "Asell",
      roles: ["Star", "Cameraman"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula. Proin vulputate condimentum lacus, a tristique mi finibus a. Vivamus lobortis odio vel.",
    },
    {
      image: "/img/team/roman.webp",
      firstName: "Roman",
      secondName: "Aliev",
      roles: ["Star", "Cameraman"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula. Proin vulputate condimentum lacus, a tristique mi finibus a. Vivamus lobortis odio vel.",
    },
    {
      image: "/img/team/aino.webp",
      firstName: "Aino",
      secondName: "Skyttälä",
      roles: ["Manager", "Accountant"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula. Proin vulputate condimentum lacus, a tristique mi finibus a. Vivamus lobortis odio vel.",
    },
    {
      image: "/img/team/santeri.webp",
      firstName: "Santeri",
      secondName: "Koskinen",
      roles: ["Accountant", "CEO"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim tempor ipsum, quis luctus neque sollicitudin vel. Aliquam hendrerit sapien sed metus malesuada, nec efficitur sem dictum. Cras eu mi ac mauris tristique eleifend sed eget ligula. Proin vulputate condimentum lacus, a tristique mi finibus a. Vivamus lobortis odio vel.",
    },
  ];

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
        draggable="false"
        alt="Team Banner"
        sx={{
          width: "100vw",
          height: isMobile ? "200px" : isTablet ? "300px" : "400px",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(50%)",
          userSelect: "none",
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
        variant="section-title"
        sx={{
          zIndex: 5,
          mt: isMobile
            ? "calc((200px - 1.5rem) / 2 - 48px)"
            : isTablet
            ? "calc((300px - 2rem) / 2 - 63px)"
            : "calc((400px - 2.5rem) / 2 - 90px)",
          mb: isMobile
            ? "calc((200px - 1.5rem) / 2 + 36px)"
            : isTablet
            ? "calc((300px - 2rem) / 2 + 47px)"
            : "calc((400px - 2.5rem) / 2 + 70px)",
        }}
      >
        {t("meetTheTeam.title").toUpperCase()}
      </Typography>

      {/* Team Cards */}
      <DefaultContainer sx={{ mt: isMobile ? 1 : isTablet ? 2 : 4 }}>
        {teamMembers.map((member, index) => (
          <PersonCard
            key={index}
            image={member.image}
            firstName={member.firstName}
            secondName={member.secondName}
            roles={member.roles}
            description={member.description}
          />
        ))}
      </DefaultContainer>
    </Box>
  );
};

export default Team;
