import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const OurJourney = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState(null);

  const information = [
    {
      year: "2021",
      description: t("ourJourney.descriptions.2021"),
    },
    {
      year: "2022",
      description: t("ourJourney.descriptions.2022"),
    },
    {
      year: "2023",
      description: t("ourJourney.descriptions.2023"),
    },
    {
      year: "2024",
      description: t("ourJourney.descriptions.2024"),
    },
    {
      year: "2025",
      description: t("ourJourney.descriptions.2025"),
    },
  ];

  const handleCircleClick = (year) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  const selectedInfo = information.find((info) => info.year === selectedYear);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        position: "relative",
        py: isMobile ? 2 : isTablet ? 4 : 6,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
        }}
      >
        {t("ourJourney.title").toUpperCase()}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: isMobile ? 2 : isTablet ? 3 : 4,
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
        {information.map((info, index) => (
          <IconButton
            key={index}
            className="circle, light-bg-blur"
            aria-label={`Select year ${info.year}`}
            onClick={(e) => handleCircleClick(info.year, e)}
            sx={{
              width: isMobile ? "55px" : isTablet ? "70px" : "80px",
              height: isMobile ? "55px" : isTablet ? "70px" : "80px",
              borderRadius: "50%",
              bgcolor:
                selectedYear === info.year
                  ? "rgba(255, 255, 255, 0.02)"
                  : "rgba(255, 255, 255, 0.05)",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: selectedYear === info.year ? "scale(1.2)" : "none",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              "&:hover": {
                transform: isMobile ? "" : "scale(1.2)",
                bgcolor: "rgba(255, 255, 255, 0.03)",
              },
              "&:active": {
                transform: isMobile ? "" : "scale(1.1)",
              },
            }}
          >
            <Typography
              variant="h6"
              className="year"
              sx={{
                fontSize: isMobile ? "0.95rem" : isTablet ? "1.2rem" : "1.5rem",
                transition: "color 0.3s ease, text-shadow 0.3s ease",
                fontWeight: "bold",
                color:
                  selectedYear === info.year
                    ? "var(--primary)"
                    : "var(--off-white)",
                userSelect: "none",
                textShadow:
                  selectedYear === info.year
                    ? "0 0 16px var(--primary)"
                    : "none",
              }}
            >
              {info.year}
            </Typography>
          </IconButton>
        ))}
      </Box>

      {/* Description */}
      {selectedInfo && (
        <Box
          className="light-bg-blur"
          aria-label={`Description for year ${selectedInfo.year}`}
          sx={{
            p: 4,
            m: 2,
            mb: 0,
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            maxWidth: "600px",
            boxSizing: "border-box",
            width: "90%",
            position: "relative",
          }}
        >
          <CloseIcon
            onClick={() => setSelectedYear(null)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelectedYear(null);
            }}
            tabIndex={0}
            role="button"
            focusable="false"
            aria-label="Close description"
            aria-hidden="false"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              cursor: "pointer",
              "&:active": {
                outline: "none",
              },
            }}
          />
          <Typography
            sx={{
              lineHeight: 1.6,
              fontSize: isMobile ? "0.9rem" : isTablet ? "1.15rem" : "1.25rem",
            }}
          >
            {selectedInfo.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default OurJourney;
