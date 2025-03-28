import { Box, Typography, Stack } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AddressIcon from "@mui/icons-material/Apartment";
import DefaultContainer from "../components/DefaultContainer";

const Contact = () => {
  const { isMobile, isTablet } = useScreenSize();
  const { t } = useTranslation();

  return (
    <DefaultContainer id="contact" sx={{ gap: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.5rem",
          color: "var(--off-white)",
          textAlign: "center",
        }}
      >
        {t("contact.title").toUpperCase()}
      </Typography>

      {/* Subtitle Mobile and Tablet */}
      {isMobile || isTablet ? (
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "2.5rem" : "3.5rem",
            fontFamily: "AccentFont",
            color: "var(--primary)",
            textShadow: "0 0 16px var(--primary)",
            my: -1,
          }}
        >
          {t("contact.subtitle").toUpperCase()}
        </Typography>
      ) : null}

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Fun Picture */}
        {!isMobile && (
          <Box
            component="img"
            src="/img/contact-fun.webp"
            alt="Contact Us"
            draggable="false"
            sx={{
              width: "30%",
              maxHeight: "400px",
              objectFit: "contain",
              userSelect: "none",
              filter: "drop-shadow(0 0 32px rgba(0, 0, 0, 0.75))",
            }}
          />
        )}

        {/* Main Information */}
        <Stack
          aria-label="Contact Information"
          spacing={3}
          sx={{
            flex: 1,
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Subtitle Desktop*/}
          {!isMobile && !isTablet && (
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: "4.5rem",
                fontFamily: "AccentFont",
                color: "var(--primary)",
                textShadow: "0 0 16px var(--primary)",
              }}
            >
              {t("contact.subtitle").toUpperCase()}
            </Typography>
          )}

          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
              color: "var(--off-white)",
              lineHeight: 1.6,
            }}
          >
            {t("contact.description")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: 2,
              flexWrap: "wrap",
              "& a": {
                fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
                color: "var(--off-white)",
                lineHeight: isMobile ? "20px" : "24px",
                fontWeight: 200,
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "var(--primary)",
                  textShadow: "0 0 16px var(--primary)",
                  filter: "brightness(1.5)",
                },
              },
              "& .contact-info-header": {
                fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.4rem",
                color: "var(--off-white)",
                fontWeight: "bold",
                lineHeight: isMobile ? "20px" : "24px",
              },
            }}
          >
            {/* Contact Details */}
            <Stack spacing={isMobile ? 1 : isTablet ? 1.5 : 2}>
              {/* Email */}
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                aria-label="Email"
              >
                <EmailIcon fontSize={isMobile ? "small" : "medium"} />
                <Typography variant="body1" className="contact-info-header">
                  {t("contact.email")}:
                </Typography>
                <Typography
                  component="a"
                  href="mailto:hello@somesankarit.com"
                  variant="body1"
                >
                  hello@somesankarit.com
                </Typography>
              </Stack>
              {/* Phone */}
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                aria-label="Phone"
              >
                <PhoneIcon fontSize={isMobile ? "small" : "medium"} />
                <Typography variant="body1" className="contact-info-header">
                  {t("contact.phone")}:
                </Typography>
                <Typography
                  component="a"
                  href="tel:+358123456789"
                  variant="body1"
                >
                  +358 123 456 789
                </Typography>
              </Stack>
              {/* Address */}
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                aria-label="Address"
              >
                <AddressIcon fontSize={isMobile ? "small" : "medium"} />
                <Typography variant="body1" className="contact-info-header">
                  {t("contact.address")}:
                </Typography>
                <Typography
                  component="a"
                  href="https://www.google.com/maps?q=Helsinki,+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body1"
                >
                  Helsinki, Finland
                </Typography>
              </Stack>
            </Stack>

            {/* Fun Picture on mobile */}
            {isMobile && (
              <Box
                component="img"
                src="/img/contact-fun.webp"
                alt="Contact Us"
                draggable="false"
                sx={{
                  width: "30%",
                  maxHeight: "300px",
                  objectFit: "contain",
                  userSelect: "none",
                  filter: "drop-shadow(0 0 32px rgba(0, 0, 0, 0.75))",
                }}
              />
            )}
          </Box>
        </Stack>
      </Box>
    </DefaultContainer>
  );
};

export default Contact;
