import { useState } from "react";
import { Card, Typography, Box, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useScreenSize from "../hooks/useScreenSize";

const ServiceCard = ({ service }) => {
  const { isMobile, isTablet } = useScreenSize();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card
      aria-label={service.title}
      className="strong-bg-blur"
      onClick={toggleExpand}
      sx={{
        width: "100%",
        p: 2.5,
        gap: expanded ? 2 : 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:active": {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        },
        "&:hover .title": {
          color: "var(--primary)",
        },
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          className="title"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.75rem",
            color: expanded ? "var(--primary)" : "var(--off-white)",
            overflow: expanded ? "" : "hidden",
            transition: "all 0.3s ease",
            textOverflow: "ellipsis",
            flexWrap: "nowrap",
            whiteSpace: expanded ? "wrap" : "nowrap",
            textShadow: expanded ? "0 0 16px var(--primary)" : "none",
          }}
        >
          {service.title}
        </Typography>
        <IconButton
          sx={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            color: "var(--off-white)",
            p: 0,
          }}
        >
          <ExpandMoreIcon
            fontSize={isMobile || isTablet ? "medium" : "large"}
          />
        </IconButton>
      </Box>

      {/* Expandable Content with Smooth Animation */}
      <Box
        sx={{
          overflow: "hidden",
          maxHeight: expanded ? "300px" : "0px",
          opacity: expanded ? 1 : 0,
          transition: "all 0.3s ease-in-out",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.1rem",
            color: "var(--off-white)",
          }}
        >
          {service.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <Box
            component="ul"
            sx={{
              listStyleType: "disc",
              pl: 4,
              my: 0,
              color: "var(--off-white)",
              fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1.1rem",
            }}
          >
            {service.bulletpoints.map((feature, index) => (
              <Box component="li" key={index} sx={{ mb: 1, textAlign: "left" }}>
                {feature}
              </Box>
            ))}
          </Box>
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
        </Box>
      </Box>
    </Card>
  );
};

export default ServiceCard;
