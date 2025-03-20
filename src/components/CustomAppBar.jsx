import { Box, Typography, Toolbar, AppBar, Stack } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const CustomAppBar = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "transparent",
          color: "var(--off-white)",
          display: "grid",
          placeItems: "center",
          boxShadow: "none",
          top: isMobile ? 0 : isTablet ? 8 : 16,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1024px",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              px: isMobile ? 1 : isTablet ? 2 : 4,
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              spacing={isMobile ? 1 : 2}
              flexWrap="nowrap"
              alignItems="center"
            >
              <Box
                component="img"
                src="/img/sportsnetwork_default.png"
                alt="Logo"
                draggable="false"
                sx={{
                  height: "auto",
                  width: "auto",
                  maxHeight: isMobile ? "40px" : "48px",
                  maxWidth: "120px",
                }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                fontStyle="italic"
                fontSize={isMobile ? "18px" : isTablet ? "20px" : "24px"}
              >
                SOMESANKARIT
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{
                "& a": {
                  textDecoration: "none",
                  color: "var(--off-white)",
                  fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
                  willChange: "transform",
                  transition:
                    "color 0.3s ease, text-shadow 0.3s ease, transform 0.1s ease",
                  "&:hover": {
                    color: "var(--primary)",
                    textShadow: "0 0 12px var(--primary)",
                    transform: "scale(1.05)",
                    filter: "brightness(2)",
                  },
                },
              }}
            >
              <a href="#about">ABOUT</a>
              <a href="#team">TEAM</a>
              <a href="#contact">CONTACT</a>
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default CustomAppBar;
