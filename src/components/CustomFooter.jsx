import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
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
        borderTop: "1px solid var(--border)",
        mt: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          px: isMobile ? 1 : isTablet ? 2 : 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          boxSizing: "border-box",
        }}
      >
        {/* Top Section - Branding & Socials */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* Left Section - Branding & Slogan */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              {/* <Box
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
              /> */}
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
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "var(--border)",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              Promote your business in the digital space.
            </Typography>
          </Box>

          {isMobile && (
            <Box
              sx={{
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(to right, transparent 0%, var(--border) 33%, var(--border) 66%, transparent 100%)",
              }}
            />
          )}

          <Typography variant="body2" sx={{ color: "var(--border)" }}>
            © Somesankarit {new Date().getFullYear()}
          </Typography>

          {/* Right Section - Social Media Icons
          Here until the moment when we have real social networks
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              href="https://www.tiktok.com"
              target="_blank"
              sx={{
                transition: "opacity 0.2s ease",
                opacity: 0.3,
                "&:hover": { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src="/img/icons/tik-tok.webp"
                alt="TikTok"
                sx={{ width: 20, height: 20 }}
              />
            </IconButton>
            <IconButton
              href="https://www.twitter.com"
              target="_blank"
              sx={{
                transition: "opacity 0.2s ease",
                opacity: 0.3,
                "&:hover": { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src="/img/icons/twitter.webp"
                alt="Twitter"
                sx={{ width: 20, height: 20 }}
              />
            </IconButton>
            <IconButton
              href="https://www.whatsapp.com"
              target="_blank"
              sx={{
                transition: "opacity 0.2s ease",
                opacity: 0.3,
                "&:hover": { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src="/img/icons/whatsapp.webp"
                alt="WhatsApp"
                sx={{ width: 20, height: 20 }}
              />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              sx={{
                transition: "opacity 0.2s ease",
                opacity: 0.3,
                "&:hover": { opacity: 1 },
              }}
            >
              <Box
                component="img"
                src="/img/icons/instagram.webp"
                alt="Instagram"
                sx={{ width: 20, height: 20 }}
              />
            </IconButton>
          </Box> */}
        </Box>

        {/* Divider Line
        Here until the moment when we have real social networks
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(to right, transparent 0%, var(--border) 33%, var(--border) 66%, transparent 100%)",
          }}
        /> */}

        {/* Bottom Section - Copyright & Attribution
        Here untile the moment when we have real social networks
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "var(--border)" }}>
            © Somesankarit 2025
          </Typography>
          <Typography variant="body2" sx={{ color: "var(--border)" }}>
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default CustomFooter;
