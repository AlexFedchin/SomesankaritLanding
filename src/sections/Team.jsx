import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const Team = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Container
      id="team"
      sx={{
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? 4 : isTablet ? 6 : 8,
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

      <Stack direction="row" spacing={isMobile ? 2 : isTablet ? 4 : 8}>
        <Box
          component="img"
          src="/img/team/mirko.JPG"
          alt="Mirko"
          draggable="false"
          sx={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 2,
            userSelect: "none",
          }}
        />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: isMobile ? "3rem" : isTablet ? "4rem" : "5rem",
                fontFamily: "AccentFont",
                lineHeight: "60px",
                userSelect: "none",
              }}
            >
              Mirko
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "var(--primary)",
                fontSize: isMobile ? "4rem" : isTablet ? "5rem" : "6rem",
                fontFamily: "AccentFont",
                lineHeight: "72px",
                letterSpacing: 2,
                textShadow: "0 0 16px var(--primary)",
                userSelect: "none",
              }}
            >
              ASELL
            </Typography>
          </Stack>

          <Box
            sx={{
              height: "2px",
              width: "100%",
              background:
                "linear-gradient(-45deg, transparent 20%, var(--primary) 100%)",
            }}
          />

          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              fontSize: isMobile ? "0.75rem" : isTablet ? "1rem" : "1.25rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            condimentum a eros et sollicitudin. Donec lectus magna, facilisis
            sed justo sed, facilisis maximus diam. Praesent tortor lectus,
            aliquam fermentum tincidunt ut, suscipit a lorem. Curabitur vitae
            convallis odio. Duis ut erat volutpat, rhoncus velit vitae, lacinia
            tellus. Sed ultricies odio.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Team;
