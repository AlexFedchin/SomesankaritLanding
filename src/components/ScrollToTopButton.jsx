import { useEffect, useState } from "react";
import IconButton from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      aria-label="Scroll to top button"
      color="primary"
      size="small"
      className="light-bg-blur"
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        zIndex: 5,
        opacity: showScrollButton ? 1 : 0,
        transform: showScrollButton ? "" : "translateX(60px)",
        bgcolor: "transparent",
        color: "var(--off-white)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease-in-out",
        willChange: "opacity, transform, box-shadow, color",
        "&:hover": {
          bgcolor: "var(--primary)",
          boxShadow: "0 0 8px var(--primary), 0 0 32px var(--primary)",
        },
        "&:active": {
          bgcolor: "var(--primary)",
          boxShadow: "0 0 8px var(--primary), 0 0 32px var(--primary)",
        },
      }}
    >
      <KeyboardArrowUpIcon fontSize="large" />
    </IconButton>
  );
};

export default ScrollToTopButton;
