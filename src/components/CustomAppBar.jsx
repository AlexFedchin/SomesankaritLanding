import { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  AppBar,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import BackIcon from "@mui/icons-material/ArrowBack";
import AccentButton from "./AccentButton";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const CustomAppBar = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t, i18n } = useTranslation();

  const menuItems = [
    { text: t("menuItems.whatWeDo"), href: "#whatWeDo" },
    { text: t("menuItems.heroes"), href: "#heroes" },
    { text: t("menuItems.references"), href: "#references" },
    { text: t("menuItems.ourServices"), href: "#ourServices" },
    { text: t("menuItems.contact"), href: "#contact" },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleLanguage = () => {
    if (isMobile || isTablet) toggleDrawer();
    i18n.changeLanguage(i18n.language === "en" ? "fi" : "en");
  };

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
          className="strong-bg-blur"
          sx={{
            mx: isMobile || isTablet ? 0 : "16px",
            borderRadius: isMobile || isTablet ? 0 : 2,
            width: "100%",
            maxWidth:
              isMobile || isTablet
                ? "1200px"
                : "min(1200px, calc(100% - 32px))",
            px: isMobile ? 1 : 2,
            py: isMobile ? 1 : 1.5,
            display: "flex",
            boxSizing: "border-box",
            border:
              !isTablet && !isMobile
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "none",
            borderBottom:
              isMobile || isTablet ? "1px solid rgba(255, 255, 255, 0.1)" : "",
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
              minHeight: "unset !important",
            }}
          >
            <Stack
              direction="row"
              spacing={isMobile ? 2 : 3}
              flexWrap="nowrap"
              alignItems="center"
            >
              {/* Logo */}
              <Stack
                direction="row"
                spacing={isMobile ? 1 : 1}
                flexWrap="nowrap"
                alignItems="center"
                draggable="false"
              >
                {/* <Box
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
                /> */}
                <Typography
                  variant="h6"
                  draggable="false"
                  sx={{
                    textAlign: "left",
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
              {isMobile || isTablet ? null : (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    "& a": {
                      textDecoration: "none",
                      textAlign: "center",
                      color: "var(--off-white)",
                      fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
                      willChange: "color, text-shadow, filter",
                      transition:
                        "color 0.3s ease, text-shadow 0.3s ease, filter 0.3s ease",
                      "&:hover": {
                        color: "var(--primary)",
                        textShadow:
                          "0 0 8px var(--primary), 0 0 32px var(--primary), 0 0 48px var(--primary), 0 0 100px var(--primary)",
                        filter: "brightness(2)",
                      },
                    },
                  }}
                >
                  {menuItems.map(
                    (item, index) =>
                      item.href !== "#contact" && (
                        <a key={index} href={item.href} draggable={false}>
                          {item.text}
                        </a>
                      )
                  )}
                </Stack>
              )}
            </Stack>

            {/* Contact Button, Language, Menu */}
            <Stack
              direction="row"
              spacing={isMobile ? 2 : 2}
              alignItems="center"
            >
              {/* Contact Button */}
              {isMobile ? null : (
                <AccentButton href="#contact">
                  {t("menuItems.contact")}
                </AccentButton>
              )}
              {/* Language Select */}
              {isMobile || isTablet ? null : (
                <Typography
                  onClick={toggleLanguage}
                  tabIndex={0}
                  sx={{
                    textDecoration: "none",
                    textAlign: "center",
                    color: "var(--off-white)",
                    fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
                    cursor: "pointer",
                    userSelect: "none",
                    willChange: "color, text-shadow, filter",
                    fontWeight: 200,
                    transition:
                      "color 0.3s ease, text-shadow 0.3s ease, filter 0.3s ease",
                    "&:hover": {
                      color: "var(--primary)",
                      textShadow:
                        "0 0 8px var(--primary), 0 0 32px var(--primary), 0 0 48px var(--primary), 0 0 100px var(--primary)",
                      filter: "brightness(2)",
                    },
                  }}
                >
                  {i18n.language === "fi" ? "ENG" : "FIN"}
                </Typography>
              )}
              {/* Menu Icon */}
              {isMobile || isTablet ? (
                <Box
                  component="img"
                  src="/img/icons/menu.svg"
                  alt="Menu"
                  onClick={toggleDrawer}
                  draggable="false"
                  sx={{
                    height: "auto",
                    width: "auto",
                    maxHeight: isMobile ? "36px" : isTablet ? "40px" : "44px",
                    maxWidth: "40px",
                    userSelect: "none",
                    cursor: "pointer",
                  }}
                />
              ) : null}
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Drawer for Mobile Sidebar */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: isTablet ? "block" : "none",
          ".MuiDrawer-paper": {
            bgcolor: "rgba(0, 0, 0, 0.02)",
            color: "var(--off-white) !important",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          },
        }}
      >
        {/* Back and Language Select */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            p: 2,
            mt: 1,
          }}
        >
          <BackIcon onClick={toggleDrawer} sx={{ cursor: "pointer" }} />

          <Typography
            onClick={toggleLanguage}
            sx={{
              fontSize: isMobile ? "0.9rem" : "1rem",
              userSelect: "none",
              cursor: "pointer",
              transition: "color 0.2s ease, text-shadow 0.2s ease",
              willChange: "color, text-shadow, filter",
              "&:hover, &:active": {
                color: "var(--primary)",
                textShadow:
                  "0 0 8px var(--primary), 0 0 32px var(--primary), 0 0 48px var(--primary), 0 0 100px var(--primary)",
                filter: "brightness(2)",
              },
            }}
          >
            {i18n.language === "fi" ? "ENG" : "FIN"}
          </Typography>
        </Stack>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            width: "calc(100% - 16px)",
            ml: 2,
            background:
              "linear-gradient(-45deg, transparent 0%, var(--off-white) 100%)",
          }}
        />

        {/* Menu Items */}
        <List
          sx={{
            width: isMobile ? 200 : 250,
            py: 2,
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem
              component="a"
              href={item.href}
              key={index}
              onClick={toggleDrawer}
              draggable={false}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    color: "var(--off-white)",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    transition: "color 0.2s ease, text-shadow 0.2s ease",
                    willChange: "color, text-shadow, filter",
                    userSelect: "none",
                    "&:hover, &:active": {
                      color: "var(--primary)",
                      textShadow:
                        "0 0 8px var(--primary), 0 0 32px var(--primary), 0 0 48px var(--primary), 0 0 100px var(--primary)",
                      filter: "brightness(2)",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          alignItems="center"
          sx={{ mt: "auto", p: 2 }}
        >
          {/* <Box
            component="img"
            src="/img/vite.svg"
            alt="Logo"
            draggable="false"
            sx={{
              height: "auto",
              width: "auto",
              maxHeight: isMobile ? "24px" : "28px",
              maxWidth: "120px",
              userSelect: "none",
            }}
          /> */}
          <Typography
            variant="h6"
            draggable="false"
            sx={{
              width: "100%",
              fontWeight: "bold",
              fontSize: isMobile ? "28px" : isTablet ? "32px" : "36px",
              fontFamily: "AccentFont",
              letterSpacing: 2,
              lineHeight: 0.85,
              userSelect: "none",
              textAlign: "center",
            }}
          >
            SOMESANKARIT
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
};

export default CustomAppBar;
