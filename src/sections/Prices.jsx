import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";
import DefaultContainer from "../components/DefaultContainer";
import ServiceCard from "../components/ServiceCard";

const Prices = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  const services = [
    {
      title: t("prices.services.socialMediaManagement"),
      description: t("prices.descriptions.socialMediaManagement"),
      price: t("prices.prices.socialMediaManagement"),
    },
    {
      title: t("prices.services.contentCreation"),
      description: t("prices.descriptions.contentCreation"),
      price: t("prices.prices.contentCreation"),
    },
    {
      title: t("prices.services.socialMediaAds"),
      description: t("prices.descriptions.socialMediaAds"),
      price: t("prices.prices.socialMediaAds"),
    },
  ];

  return (
    <DefaultContainer id="prices" sx={{ gap: 2 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
          textAlign: "center",
        }}
      >
        {t("prices.title").toUpperCase()}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
          lineHeight: 1.6,
          fontWeight: 200,
          mb: 4,
        }}
      >
        {t("prices.subtitle")}
      </Typography>
      <Box
        aria-label="services"
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: 4,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </Box>
    </DefaultContainer>
  );
};

export default Prices;
