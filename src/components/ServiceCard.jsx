import { Card, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const ServiceCard = ({ service }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Card
      aria-label={service.title}
      sx={{
        width: isMobile ? "100%" : "25%",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        p: isMobile ? 2 : 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: "220px",
        flex: 1,
        maxWidth: isMobile ? "unset" : "350px",
        gap: 4,
        borderRadius: "8px",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        willChange: "transform, box-shadow",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)",
        },
        "&:hover .title": {
          textShadow: "0 0 16px var(--primary)",
        },
      }}
    >
      <Typography
        className="title"
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.8rem",
          color: "var(--primary)",
          transition: "text-shadow 0.3s ease",
        }}
      >
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.1rem",
          color: "var(--off-white)",
        }}
      >
        {service.description}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.5rem",
          color: "var(--off-white)",
          background: "rgba(255, 255, 255, 0.1)",
          px: 2,
          py: 1,
          borderRadius: "4px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {service.price}
      </Typography>
    </Card>
  );
};

export default ServiceCard;
