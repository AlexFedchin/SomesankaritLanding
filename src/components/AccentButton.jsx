import React from "react";
import Button from "@mui/material/Button";
import useScreenSize from "../hooks/useScreenSize";

const AccentButton = ({ children, sx, ...props }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "4px",
        bgcolor: "var(--primary)",
        color: "var(--off-white)",
        fontWeight: "bold",
        letterSpacing: 4,
        p: "6px 14px 4px 14px",
        fontSize: isMobile ? "13px" : isTablet ? "16px" : "18px",
        transition: "filter 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          filter: "brightness(1.2)",
          boxShadow: "0 0 16px var(--primary), 0 0 48px var(--primary)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AccentButton;
