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
      <Typography variant="section-title">
        {t("contact.title").toUpperCase()}
      </Typography>

      {/* Subtitle Mobile and Tablet */}
      {isMobile || isTablet ? (
        <Typography variant="styled-title" fontFamily="AccentFont">
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
        {/* Fun Picture Desktop */}
        {!isMobile && (
          <Box
            component="img"
            src={
              isTablet
                ? "/img/contact-fun.webp"
                : "/img/contact-fun-desktop.webp"
            }
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
          spacing={isMobile ? 2 : isTablet ? 3 : 4}
          sx={{
            flex: 1,
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Subtitle Desktop*/}
          {!isMobile && !isTablet && (
            <Typography variant="styled-title" fontFamily="AccentFont">
              {t("contact.subtitle").toUpperCase()}
            </Typography>
          )}

          <Typography variant="body-text" zIndex={2}>
            {t("contact.description")}
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              pt: isMobile ? 2 : 0,
              position: isMobile ? "relative" : "",
              justifyContent: isMobile ? "" : "flex-start",
              gap: 2,
              flexWrap: "wrap",
              "& a": {
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "var(--primary)",
                  textShadow: "0 0 16px var(--primary)",
                  filter: "brightness(1.5)",
                },
              },
              "& .contact-info-header": {
                fontWeight: "bold",
              },
            }}
          >
            {/* Contact Details */}
            <Stack spacing={isMobile ? 1 : isTablet ? 1.5 : 2} zIndex={2}>
              {/* Email */}
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                aria-label="Email"
              >
                <EmailIcon fontSize={isMobile ? "small" : "medium"} />

                {!isMobile && (
                  <Typography
                    variant="body-text"
                    className="contact-info-header"
                  >
                    {t("contact.email")}:
                  </Typography>
                )}

                <Typography
                  component="a"
                  href="mailto:hello@somesankarit.fi"
                  variant="body-text"
                >
                  hello@somesankarit.fi
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

                {!isMobile && (
                  <Typography
                    variant="body-text"
                    className="contact-info-header"
                  >
                    {t("contact.phone")}:
                  </Typography>
                )}

                <Typography
                  component="a"
                  href="tel:+358409384447"
                  variant="body-text"
                >
                  +358 40 938 4447
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

                {!isMobile && (
                  <Typography
                    variant="body-text"
                    className="contact-info-header"
                  >
                    {t("contact.address")}:
                  </Typography>
                )}

                <Typography
                  component="a"
                  href="https://www.google.com/maps?q=Tampere,+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body-text"
                >
                  Tampere, Finland
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
                  width: "32%",
                  maxHeight: "300px",
                  objectFit: "contain",
                  userSelect: "none",
                  filter: "drop-shadow(0 0 32px rgba(0, 0, 0, 0.75))",
                  position: "absolute",
                  right: 0,
                  zIndex: 1,
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
