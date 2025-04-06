import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";
import DefaultContainer from "../components/DefaultContainer";
import ServiceCard from "../components/ServiceCard";

const Prices = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  // Fetch all the services from the locale file
  const services = Object.keys(
    t("prices.services", { returnObjects: true })
  ).map((key) => ({
    title: t(`prices.services.${key}.title`),
    description: t(`prices.services.${key}.description`),
    bulletpoints: Object.values(
      t(`prices.services.${key}.bulletpoints`, { returnObjects: true })
    ),
    price: t(`prices.services.${key}.price`),
  }));

  return (
    <DefaultContainer id="prices" sx={{ gap: 2 }}>
      <Typography variant="section-title">
        {t("prices.title").toUpperCase()}
      </Typography>
      <Typography
        variant="body-text"
        sx={{
          mb: isMobile ? 2 : isTablet ? 3 : 4,
          textAlign: "center",
        }}
      >
        {t("prices.subtitle")}
      </Typography>

      <Box
        aria-label="services"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: isMobile || isTablet ? 2 : 3,
          width: "100%",
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
