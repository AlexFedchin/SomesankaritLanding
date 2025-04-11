import { Box, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const IphonePortfolioCard = ({ project, style }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Box
      aria-label={project.title}
      component="a"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: isMobile ? "200px" : "250px",
        minWidth: isMobile ? "200px" : "250px",
        position: "relative",
        background: "transparent",
        boxShadow: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      {/* iPhone Frame */}
      <Box
        component="img"
        src="/img/iphone-frame.webp"
        alt="iPhone Frame"
        draggable="false"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Project Image Inside the iPhone Screen */}
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        draggable="false"
        sx={{
          position: "absolute",
          top: "12%",
          left: "10%",
          width: "80%",
          height: "45%",
          objectFit: "cover",
          borderRadius: "10px",
          zIndex: 3,
        }}
      />

      {/* Project Text Inside the iPhone */}
      <Box
        sx={{
          position: "absolute",
          bottom: "8%",
          left: "10%",
          width: "80%",
          zIndex: 3,
          color: "var(--off-black)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.5rem",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            wordBreak: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
            textOverflow: "ellipsis",
            textAlign: "left",
            display: "-webkit-box",
          }}
        >
          {project.title}
        </Typography>

        <Box
          sx={{
            height: "1px",
            my: 1,
            background: "var(--off-black)",
          }}
        />

        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            hyphens: "auto",
            WebkitLineClamp: 3,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            textAlign: "left",
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default IphonePortfolioCard;
