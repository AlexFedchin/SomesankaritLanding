import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PortfolioCard from "../components/PortfolioCard";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";
import DefaultContainer from "../components/DefaultContainer";

const Portfolio = () => {
  const { isMobile } = useScreenSize();
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projects = [
    {
      title: t("portfolio.projects.project1.title"),
      description: t("portfolio.projects.project1.description"),
      image: "/img/projects/project1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: t("portfolio.projects.project2.title"),
      description: t("portfolio.projects.project2.description"),
      image: "/img/projects/project2.jpg",
      link: "https://example.com/project2",
    },
    {
      title: t("portfolio.projects.project3.title"),
      description: t("portfolio.projects.project3.description"),
      image: "/img/projects/project3.jpg",
      link: "https://example.com/project3",
    },
    {
      title: t("portfolio.projects.project1.title"),
      description: t("portfolio.projects.project1.description"),
      image: "/img/projects/project1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: t("portfolio.projects.project2.title"),
      description: t("portfolio.projects.project2.description"),
      image: "/img/projects/project2.jpg",
      link: "https://example.com/project2",
    },
    {
      title: t("portfolio.projects.project3.title"),
      description: t("portfolio.projects.project3.description"),
      image: "/img/projects/project3.jpg",
      link: "https://example.com/project3",
    },
  ];

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = isMobile ? 216 : 266;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Update arrow visibility on scroll
  useEffect(() => {
    const updateArrows = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };

    const currentScrollRef = scrollRef.current;
    currentScrollRef?.addEventListener("scroll", updateArrows);
    updateArrows(); // Initial check

    return () => currentScrollRef?.removeEventListener("scroll", updateArrows);
  }, []);

  return (
    <DefaultContainer id="portfolio" sx={{ gap: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : "2rem",
          color: "var(--off-white)",
          textAlign: "center",
        }}
      >
        {t("portfolio.title").toUpperCase()}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          mt: 2,
        }}
      >
        {/* Left Shading */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "80px",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent)",
            zIndex: 1,
            pointerEvents: "none",
            opacity: showLeftArrow ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Left Arrow */}
        <Box
          sx={{
            position: "absolute",
            left: 10,
            zIndex: 2,
            opacity: showLeftArrow ? 1 : 0,
            visibility: showLeftArrow ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          <IconButton
            onClick={() => handleScroll("left")}
            className="light-bg-blur"
            sx={{
              color: "var(--off-white)",
              background: "rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>

        {/* Scrollable List */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            py: 1,
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 2,
            width: "100%",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </Box>

        {/* Right Arrow */}
        <Box
          sx={{
            position: "absolute",
            right: 10,
            zIndex: 2,
            opacity: showRightArrow ? 1 : 0,
            visibility: showRightArrow ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          <IconButton
            onClick={() => handleScroll("right")}
            className="light-bg-blur"
            sx={{
              color: "var(--off-white)",
              background: "rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Right Shading */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "80px",
            background:
              "linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent)",
            zIndex: 1,
            pointerEvents: "none",
            opacity: showRightArrow ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </Box>
    </DefaultContainer>
  );
};

export default Portfolio;
