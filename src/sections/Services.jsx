import { useState } from "react";
import { Box, Typography, IconButton, Card, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useScreenSize();

  // Get services from translation file
  const servicesObj = t("ourServices.services", { returnObjects: true });

  // Map translation object to array for rendering
  const services = Object.values(servicesObj).map((service) => ({
    title: service.shortTitle,
    longTitle: service.longTitle,
    description: service.description,
    features: Object.values(service.features || {}),
    prices: Object.values(service.prices || {}),
  }));

  const [activeService, setActiveService] = useState(null);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [showDetailsCard, setShowDetailsCard] = useState(false);

  const handleCircleClick = (index) => {
    if (activeService && activeService.title === services[index].title) {
      setShowDetailsCard(false);
      setActiveService(null);
    } else {
      setActiveService(services[index]);
      setSelectedService(services[index]);
      setShowDetailsCard(true);
    }
  };

  return (
    <Box
      id="ourServices"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: isMobile ? 2 : isTablet ? 3 : 4,
        position: "relative",
        py: isMobile ? 2 : isTablet ? 4 : 6,
        transition: "margin-bottom 0.3s ease",
        mb: showDetailsCard ? 0 : isMobile ? -2 : isTablet ? -3 : -4,
      }}
    >
      {/* Title */}
      <Typography variant="section-title">
        {t("ourServices.title").toUpperCase()}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Line */}
        <Box
          sx={{
            width: "100vw",
            position: "absolute",
            left: "0",
            right: 0,
            height: "1px",
            zIndex: -1,
            background:
              "linear-gradient(to right, transparent 0%, var(--off-white) 33%, var(--off-white) 66%, transparent 100%)",
          }}
        />

        {/* Circles */}
        {services.map((service, index) => (
          <IconButton
            key={index}
            className="circle, light-bg-blur"
            aria-label={`Select service: ${service.title}`}
            onClick={() => handleCircleClick(index)}
            sx={{
              width: isMobile ? "80px" : isTablet ? "100px" : "120px",
              height: isMobile ? "80px" : isTablet ? "100px" : "120px",
              borderRadius: "50%",
              bgcolor:
                activeService?.title === service.title
                  ? "rgba(255, 255, 255, 0.02)"
                  : "rgba(255, 255, 255, 0.05)",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              willChange: "transform, background-color",
              transition: "all 0.3s ease",
              transform:
                activeService?.title === service.title ? "scale(1.1)" : "none",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              "&:hover": {
                transform: isMobile ? "" : "scale(1.1)",
                bgcolor: "rgba(255, 255, 255, 0.03)",
              },
              "&:active": {
                transform: isMobile ? "" : "scale(1.05)",
              },
            }}
          >
            <Typography
              variant="h6"
              className="service"
              sx={{
                fontSize: isMobile ? "0.95rem" : isTablet ? "1.2rem" : "1.5rem",
                transition: "color 0.3s ease, text-shadow 0.3s ease",
                fontWeight: "bold",
                color:
                  activeService?.title === service.title
                    ? "var(--primary)"
                    : "var(--off-white)",
                userSelect: "none",
                textShadow:
                  activeService?.title === service.title
                    ? "0 0 16px var(--primary)"
                    : "none",
              }}
            >
              {service.title}
            </Typography>
          </IconButton>
        ))}
      </Box>

      {/* Description */}
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          width: "100%",
          p: 2,
          boxSizing: "border-box",
          transition:
            "opacity 0.3s ease, transform 0.3s ease, max-height 0.3s ease",
          opacity: showDetailsCard ? 1 : 0,
          transform: showDetailsCard ? "translateY(0)" : "translateY(-20px)",
          maxHeight: showDetailsCard ? "600px" : 0,
          overflow: "hidden",
        }}
      >
        <Card
          aria-label={selectedService?.title}
          className="strong-bg-blur"
          sx={{
            width: "100%",
            p: 2,
            gap: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxSizing: "border-box",
            justifyContent: "space-between",
            color: "var(--off-white)",
            "&:hover": {
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
            },
            "&:active": {
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.01)",
            },
          }}
        >
          <IconButton
            tabIndex={0}
            aria-label="Close description"
            aria-hidden="false"
            onClick={() => {
              setShowDetailsCard(false);
              setActiveService(null);
            }}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              cursor: "pointer",
              "&:active": {
                outline: "none",
              },
            }}
          >
            <CloseIcon sx={{ color: "var(--off-white)" }} />
          </IconButton>

          <Typography
            variant="card-title"
            className="title"
            sx={{
              color: "var(--primary)",
              transition: "all 0.3s ease",
              textOverflow: "ellipsis",
              flexWrap: "nowrap",
              whiteSpace: "wrap",
              textShadow: "0 0 16px var(--primary)",
            }}
          >
            {selectedService?.longTitle}
          </Typography>

          <Typography variant="card-text">
            {selectedService?.description}
          </Typography>

          {/* Features Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 1 : 1.5,
              pl: 2,
            }}
          >
            {selectedService?.features.map((feature, index) => (
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

          {/* Prices */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {selectedService?.prices.map((price, index) => (
              <Typography
                variant="h6"
                component="a"
                key={index}
                aria-label={`Price for ${selectedService?.longTitle}`}
                href="#contact"
                className="strong-bg-blur"
                onClick={(e) => e.stopPropagation()}
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "var(--off-white)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  px: 2,
                  py: 1,
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
                {price}
              </Typography>
            ))}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Services;
