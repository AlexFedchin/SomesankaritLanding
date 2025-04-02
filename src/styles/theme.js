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
      MuiInputLabel: {
        styleOverrides: {
          root: {
            transition: "all 0.2s ease",
            color: "var(--off-white)",
            opacity: 0.5,
            fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
            "&.Mui-focused": {
              color: "var(--off-white)",
              opacity: 0.8,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 0.01)",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
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
