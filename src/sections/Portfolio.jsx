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
        title: "POHJANHEIMO",
        description: t("portfolio.projects.project1.description"),
        image: "/img/projects/project1.webp",
        likes: "5.8K",
        comments: "38",
        saves: "224",
        views: "164.2K",
        reposts: "276",
        link: "https://www.tiktok.com/@mirkoasell/video/7473872455438994711?is_from_webapp=1&sender_device=pc&web_id=7486393158625936918",
      },
      {
        title: "SAME GOAL",
        description: t("portfolio.projects.project2.description"),
        image: "/img/projects/project2.webp",
        likes: "3.3K",
        comments: "44",
        saves: "65",
        views: "122.2K",
        reposts: "98",
        link: "https://www.tiktok.com/@samegoalclothing/video/7470538855192595734?is_from_webapp=1&sender_device=pc&web_id=7486393158625936918",
      },
      {
        title: "SHAKEY",
        description: t("portfolio.projects.project3.description"),
        image: "/img/projects/project3.webp",
        likes: "3K",
        comments: "17",
        saves: "63",
        views: "56.9K",
        reposts: "146",
        link: "https://www.tiktok.com/@shakeymilkshakes/video/7483906585648041238?is_from_webapp=1&sender_device=pc&web_id=7486393158625936918",
      },
      {
        title: "RYMY-EETU",
        description: t("portfolio.projects.project4.description"),
        image: "/img/projects/project4.webp",
        likes: "15K",
        comments: "53",
        saves: "745",
        views: "255.2K",
        reposts: "3K",
        link: "https://www.tiktok.com/@romanalievv/video/7403648482306772256?is_from_webapp=1&sender_device=pc&web_id=7486393158625936918",
      },
      {
        title: "PUMPPUPOSSE",
        description: t("portfolio.projects.project5.description"),
        image: "/img/projects/project5.webp",
        likes: "1.8K",
        comments: "9.3K",
        saves: "55",
        views: "45.1K",
        reposts: "23",
        link: "https://www.tiktok.com/@pumppuposse/video/7491301435829685526?is_from_webapp=1&sender_device=pc&web_id=7486393158625936918",
      },
      {
        title: "ROSKAFEST",
        description: t("portfolio.projects.project6.description"),
        image: "/img/projects/project6.webp",
        likes: "8.1K",
        comments: "6.7K",
        saves: "302",
        views: "164.8K",
        reposts: "184",
        link: "https://www.tiktok.com/@roskafest/video/7500918509128535318?is_from_webapp=1&sender_device=pc&web_id=7486393158625936918",
      },
      {
        title: "F2F EVENT",
        description: t("portfolio.projects.project7.description"),
        image: "/img/projects/project7.webp",
        link: "",
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
            aria-label="Scroll left"
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
            aria-label="Scroll right"
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
