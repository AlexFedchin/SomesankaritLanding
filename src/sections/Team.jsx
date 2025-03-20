import { Container, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const Team = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Container
      id="team"
      sx={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "1000px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
        }}
      >
        MEET THE TEAM
      </Typography>
    </Container>
  );
};

export default Team;
