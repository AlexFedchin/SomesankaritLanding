import { Box, Typography, Toolbar, AppBar, Stack } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import AccentButton from "./AccentButton";

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
          top: isMobile || isTablet ? 0 : "16px",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            mx: isMobile || isTablet ? 0 : "16px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: isMobile || isTablet ? 0 : 2,
            width: "100%",
            maxWidth:
              isMobile || isTablet
                ? "1200px"
                : "min(1200px, calc(100% - 32px))",
            px: isMobile ? 1 : isTablet ? 2 : 3,
            py: 0.5,
            display: "flex",
            boxSizing: "border-box",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              p: 0,
              width: "100%",
            }}
          >
            <Stack
              direction="row"
              spacing={isMobile ? 2 : 4}
              flexWrap="nowrap"
              alignItems="center"
            >
              {/* Logo */}
              <Stack
                direction="row"
                spacing={isMobile ? 1 : 2}
                flexWrap="nowrap"
                alignItems="center"
                draggable="false"
              >
                <Box
                  component="img"
                  src="/img/vite.svg"
                  alt="Logo"
                  draggable="false"
                  sx={{
                    height: "auto",
                    width: "auto",
                    maxHeight: isMobile ? "40px" : "48px",
                    maxWidth: "120px",
                    userSelect: "none",
                  }}
                />
                <Typography
                  variant="h6"
                  draggable="false"
                  sx={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
                    fontFamily: "AccentFont",
                    letterSpacing: 2,
                    lineHeight: 0.85,
                    userSelect: "none",
                  }}
                >
                  SOMESANKARIT
                </Typography>
              </Stack>

              {/* Navigation Links */}
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                sx={{
                  "& a": {
                    textDecoration: "none",
                    textAlign: "center",
                    color: "var(--off-white)",
                    fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
                    willChange: "font-weight, color, text-shadow",
                    transition:
                      "color 0.3s ease, text-shadow 0.3s ease, font-weight 0.1s ease",
                    "&:hover": {
                      color: "var(--primary)",
                      textShadow:
                        "0 0 8px var(--primary), 0 0 32px var(--primary), 0 0 48px var(--primary), 0 0 100px var(--primary)",
                      filter: "brightness(2)",
                      fontWeight: "bold",
                    },
                  },
                }}
              >
                <a href="#about" draggable={false}>
                  ABOUT
                </a>
                <a href="#team" draggable={false}>
                  PRICES
                </a>
                <a href="#services" draggable={false}>
                  PORTFOLIO
                </a>
              </Stack>
            </Stack>

            {/* Contact Button */}
            <AccentButton>CONTACT</AccentButton>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default CustomAppBar;
