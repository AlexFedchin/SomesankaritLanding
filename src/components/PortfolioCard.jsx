import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const PortfolioCard = ({ project }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Card
      aria-label={project.title}
      className="strong-bg-blur"
      sx={{
        width: isMobile ? "200px" : "250px",
        minWidth: isMobile ? "200px" : "250px",
        borderRadius: 2,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        bgcolor: "rgba(255, 255, 255, 0.01)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "0.3s ease",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          draggable="false"
          sx={{
            height: isMobile ? "140px" : "180px",
            objectFit: "cover",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.75rem",
              display: "-webkit-box",
              overflow: "hidden",
              color: "var(--off-white)",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              hyphens: "auto",
              textOverflow: "ellipsis",
            }}
          >
            {project.title}
          </Typography>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              my: 1,
              background:
                "linear-gradient(to right, var(--border) 0%, var(--border) 66%, transparent 100%)",
            }}
          />

          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.1rem",
              color: "var(--off-white)",
            }}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
