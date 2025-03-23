import { Box, Stack, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import DefaultContainer from "../components/DefaultContainer";

const About = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <DefaultContainer id="about">
      <Stack
        direction={isMobile || isTablet ? "column" : "row"}
        spacing={isMobile ? 2 : 4}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--background)",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            textAlign: isMobile || isTablet ? "center" : "left",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4.5rem",
              fontFamily: "AccentFont",
              color: "var(--primary)",
              marginBottom: "1rem",
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
              lineHeight: 1.6,
              color: "var(--text)",
            }}
          >
            Social media marketing companies specialize in promoting brands,
            products, and services through various social media platforms. They
            create and manage content tailored to engage target audiences,
            increase brand awareness, and drive traffic to websites. These
            companies utilize strategies such as influencer partnerships, paid
            advertising, and analytics to measure and optimize campaign
            performance. Their goal is to build a strong online presence and
            foster meaningful connections between brands and their customers.
          </Typography>
        </Box>
        <Box
          component="img"
          src="/img/roman-mirko.JPG"
          sx={{
            width: isMobile ? "100%" : isTablet ? "80%" : "50%",
            height: "auto",
            maxWidth: "350px",
            borderRadius: "15px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            objectFit: "cover",
            objectPosition: "center",
            marginTop: isMobile || isTablet ? "2rem" : "0",
          }}
        />
      </Stack>
    </DefaultContainer>
  );
};

export default About;
