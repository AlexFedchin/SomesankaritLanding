import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const PortfolioCard = ({ project }) => {
  const { isMobile } = useScreenSize();

  return (
    <Card
      sx={{
        width: isMobile ? "200px" : "250px",
        minWidth: isMobile ? "200px" : "250px",
        borderRadius: 2,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        "&:hover": {
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.02)",
        },
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        willChange: "transform, box-shadow",
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
            variant="h6"
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              color: "var(--off-white)",
              mb: 1,
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              color: "var(--off-white)",
              lineHeight: 1.5,
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
