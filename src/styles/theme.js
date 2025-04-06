import { createTheme } from "@mui/material/styles";

const createCustomTheme = ({ isMobile, isTablet }) =>
  createTheme({
    typography: {
      fontFamily: "'Oxanium', 'Montserrat', Arial, Helvetica, sans-serif",
      color: "var(--off-white)",
      "section-title": {
        fontFamily: "'Oxanium', 'Montserrat', Arial, Helvetica, sans-serif",
        fontWeight: 700,
        fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
        textAlign: "center",
        color: "var(--off-white)",
      },
      "body-text": {
        fontFamily: "'Oxanium', 'Montserrat', Arial, Helvetica, sans-serif",
        fontWeight: 300,
        fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
        textAlign: "left",
        lineHeight: 1.5,
        color: "var(--off-white)",
      },
      "card-text": {
        fontFamily: "'Oxanium', 'Montserrat', Arial, Helvetica, sans-serif",
        fontWeight: 200,
        fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.1rem",
        textAlign: "left",
        lineHeight: 1.3,
        wordBreak: "break-word",
        overflowWrap: "break-word",
        hyphens: "auto",
        color: "var(--off-white)",
      },
      "card-title": {
        fontFamily: "'Oxanium', 'Montserrat', Arial, Helvetica, sans-serif",
        fontWeight: 700,
        lineHeight: 1.3,
        fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.75rem",
        textAlign: "left",
        color: "var(--off-white)",
      },
      "styled-title": {
        fontWeight: 700,
        fontSize: isMobile ? "2.75rem" : isTablet ? "3.5rem" : "4.5rem",
        textAlign: "center",
        color: "var(--primary)",
        textShadow: "0 0 16px var(--primary)",
        lineHeight: isMobile ? "34px" : isTablet ? "43px" : "56px",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.01)",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            textAlign: "left",
            "&:hover": {
              boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
            "&:active": {
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.035)",
            },
          },
        },
      },
    },
  });

export default createCustomTheme;
