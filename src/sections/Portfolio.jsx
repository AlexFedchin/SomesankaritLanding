import { Box, Typography, IconButton, Stack } from "@mui/material";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IphonePortfolioCard from "../components/IphonePortfolioCard";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";
import DefaultContainer from "../components/DefaultContainer";

const Portfolio = () => {
  const { isMobile } = useScreenSize();
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [cardStyles, setCardStyles] = useState([]);

  const projects = useMemo(
    () => [
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
    ],
    [t]
  );

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = isMobile ? 218 : 268;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateCardStyles = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const center = scrollLeft + clientWidth / 2;

    const styles = projects.map((_, index) => {
      const card = scrollRef.current.children[index];
      if (!card) return { scale: 1, opacity: 1 };

      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2 - scrollRef.current.offsetLeft;
      const distance = Math.abs((center - cardCenter) * 0.33);

      // Calculate scale and opacity based on distance
      const scale = 1 - distance / clientWidth;
      const opacity = Math.max(0.5, 1 - distance / clientWidth);

      return { scale, opacity };
    });

    setCardStyles(styles);
  }, [projects]);

  // Update arrow visibility on scroll
  useEffect(() => {
    const updateArrows = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    };

    const handleScrollEvent = () => {
      updateArrows();
      updateCardStyles();
    };

    const currentScrollRef = scrollRef.current;
    currentScrollRef?.addEventListener("scroll", handleScrollEvent);
    updateArrows();
    updateCardStyles(); // Initial styles

    return () =>
      currentScrollRef?.removeEventListener("scroll", handleScrollEvent);
  }, [projects, updateCardStyles]);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = 2 * (isMobile ? 218 : 268);
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "auto",
      });
    }
  }, [isMobile]);

  return (
    <DefaultContainer id="references" sx={{ gap: 4 }}>
      <Typography variant="section-title">
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
              "linear-gradient(to right, var(--off-black), transparent)",
            zIndex: 4,
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
            zIndex: 5,
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
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: 2,
            px: isMobile ? "calc(50% - 100px)" : "calc(50% - 125px)",
            width: "100%",
            minHeight: isMobile ? "410px" : "500px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {projects.map((project, index) => (
            <IphonePortfolioCard
              key={index}
              project={project}
              style={{
                transform: `scale(${cardStyles[index]?.scale || 1})`,
                opacity: cardStyles[index]?.opacity || 1,
              }}
            />
          ))}
        </Box>

        {/* Right Arrow */}
        <Box
          sx={{
            position: "absolute",
            right: 10,
            zIndex: 5,
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
              "linear-gradient(to left, var(--off-black), transparent)",
            zIndex: 4,
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
