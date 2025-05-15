import { useState } from "react";
import { Card, Typography, Box, IconButton, Stack } from "@mui/material";
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
          variant="card-title"
          className="title"
          sx={{
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
          aria-label={`Expand or collapse service details for ${service.title}`}
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
        <Typography variant="card-text">{service.description}</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            alignItems: isMobile ? "flex-start" : "flex-end",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {/* Features Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 1 : 1.5,
              pl: 2,
            }}
          >
            {service.bulletpoints.map((feature, index) => (
              <Stack key={index} direction="row" gap={1} alignItems="center">
                <Box
                  component="img"
                  src="/img/icons/flash.webp"
                  alt="Flash"
                  sx={{
                    height: isMobile ? "16px" : isTablet ? "18px" : "20px",
                    width: "auto",
                  }}
                />
                <Typography variant="card-text">{feature}</Typography>
              </Stack>
            ))}
          </Box>

          {/* Price Button */}
          <Typography
            variant="h6"
            component="a"
            href="#contact"
            className="strong-bg-blur"
            onClick={(e) => e.stopPropagation()}
            sx={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.5rem",
              color: "var(--off-white)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              px: 2,
              py: 1,
              ml: isMobile ? "auto" : 0,
              borderRadius: "4px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              "&:active": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
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
