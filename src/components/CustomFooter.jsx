import React from "react";
import { Box, Grid, Typography, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import useScreenSize from "../hooks/useScreenSize";

const CustomFooter = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "trasparent",
        color: "var(--off-white)",
        width: "100%",
        display: "grid",
        placeItems: "center",
        py: isMobile ? 1 : isTablet ? 2 : 3,
        boxSizing: "border-box",
        borderTop: "1px solid var(--border-color)",
        mt: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          px: isMobile ? 1 : isTablet ? 2 : 3,
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={isMobile ? 2 : isTablet ? 3 : 4}
          justifyContent="space-between"
        >
          {/* Left Section - Branding & Socials */}
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                component="img"
                src="/img/vite.svg"
                draggable="false"
                alt="Somesankarit Logo"
                sx={{
                  height: "auto",
                  width: "auto",
                  maxHeight: "56px",
                  maxWidth: "150px",
                  userSelect: "none",
                }}
              />
              <Typography
                variant="h6"
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

            <Typography
              variant="body2"
              sx={{
                opacity: 0.5,
                mt: isMobile ? 1 : 2,
                fontStyle: "italic",
                fontSize: isMobile ? "10px" : isTablet ? "12px" : "14px",
                textAlign: "left",
              }}
            >
              Promote your business in the digital space.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                sx={{
                  color: "var(--off-white)",
                  transition: "opacity 0.2s ease",
                  opacity: 0.3,
                  "&:hover": { opacity: 1 },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                sx={{
                  color: "var(--off-white)",
                  transition: "opacity 0.2s ease",
                  opacity: 0.3,
                  "&:hover": { opacity: 1 },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.whatsapp.com"
                target="_blank"
                sx={{
                  color: "var(--off-white)",
                  transition: "opacity 0.2s ease",
                  opacity: 0.3,
                  "&:hover": { opacity: 1 },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                sx={{
                  color: "var(--off-white)",
                  transition: "opacity 0.2s ease",
                  opacity: 0.3,
                  "&:hover": { opacity: 1 },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section - Copyright & Attribution */}
        <Box
          sx={{
            mt: isMobile ? 2 : isTablet ? 3 : 4,
            pt: 2,
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © Somesankarit 2025
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Media by{" "}
            <a
              href="https://videezy.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              Videezy
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomFooter;
