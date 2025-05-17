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
      roles: [
        t("meetTheTeam.team.mirko.roles.1"),
        t("meetTheTeam.team.mirko.roles.2"),
      ],
      description: t("meetTheTeam.team.mirko.description"),
    },
    {
      image: "/img/team/roman.webp",
      firstName: "Roman",
      secondName: "Aliev",
      roles: [t("meetTheTeam.team.roman.roles.1")],
      description: t("meetTheTeam.team.roman.description"),
    },
    {
      image: "/img/team/aino.webp",
      firstName: "Aino",
      secondName: "Skyttälä",
      roles: [t("meetTheTeam.team.aino.roles.1")],
      description: t("meetTheTeam.team.aino.description"),
    },
    {
      image: "/img/team/alex.webp",
      firstName: "Alexander",
      secondName: "Fedchin",
      roles: [
        t("meetTheTeam.team.alex.roles.1"),
        t("meetTheTeam.team.alex.roles.2"),
      ],
      description: t("meetTheTeam.team.alex.description"),
    },
    {
      image: "/img/team/santeri.webp",
      firstName: "Santeri",
      secondName: "Koskinen",
      roles: [t("meetTheTeam.team.santeri.roles.1")],
      description: t("meetTheTeam.team.santeri.description"),
    },
  ];

  return (
    <Box
      id="heroes"
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
        <Typography
          variant="styled-title"
          fontFamily="AccentFont"
          sx={{
            width: "100%",
            textAlign: "left",
          }}
        >
          {t("meetTheTeam.subtitle").toUpperCase()}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography variant="body-text">
            <span
              dangerouslySetInnerHTML={{
                __html: t("meetTheTeam.description.1"),
              }}
            />
          </Typography>
          <Typography variant="body-text">
            <span
              dangerouslySetInnerHTML={{
                __html: t("meetTheTeam.description.2"),
              }}
            />
          </Typography>
          <Typography variant="body-text">
            <span
              dangerouslySetInnerHTML={{
                __html: t("meetTheTeam.description.3"),
              }}
            />
          </Typography>
        </Box>

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
