import { Box, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const OurJourney = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  const information = [
    {
      year: "2021",
      description: "Work as portsari.",
    },
    {
      year: "2022",
      description: "We started our journey with a small but passionate team.",
    },
    {
      year: "2023",
      description: "Expanded our services and reached new milestones.",
    },
    {
      year: "2024",
      description:
        "Launched innovative marketing campaigns and grew our client base.",
    },
    {
      year: "2025",
      description: "Achieved industry recognition and set new standards.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
          mt: 8,
        }}
      >
        {t("title").toUpperCase()}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: 4,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
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

        {information.map((info, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:hover .description": {
                opacity: 1,
                visibility: "visible",
                transform: "translateY(0)",
              },

              "&:hover .year, &:active .year": {
                color: "var(--primary)",
                textShadow: "0 0 16px var(--primary)",
              },

              "&:hover .circle": {
                transform: "scale(1.2)",
              },
            }}
          >
            {/* Circle */}
            <Box
              className="circle"
              sx={{
                width: isMobile ? "60px" : isTablet ? "70px" : "80px",
                height: isMobile ? "60px" : isTablet ? "70px" : "80px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(4px)",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <Typography
                variant="h6"
                className="year"
                sx={{
                  fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.5rem",
                  transition: "color 0.3s ease, text-shadow 0.3s ease",
                  fontWeight: "bold",
                  color: "var(--off-white)",
                  userSelect: "none",
                }}
              >
                {info.year}
              </Typography>
            </Box>

            {/* Text Box */}
            <Box
              className="description"
              sx={{
                position: "absolute",
                top: "100%",
                transform: "translateY(-20px)",
                width: isMobile ? "100px" : isTablet ? "150px" : "200px",
                p: 2,
                mt: isMobile ? 1 : 2,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(5px)",
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                opacity: 0,
                visibility: "hidden",
                transition: "all 0.3s ease",
                textAlign: "center",
                color: "var(--off-white)",
                zIndex: 4,
              }}
            >
              {info.description}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurJourney;
