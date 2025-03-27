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
    <DefaultContainer id="contact">
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
            src="/img/contact-fun.svg"
            alt="Contact Us"
            draggable="false"
            sx={{
              width: isMobile ? "100%" : isTablet ? "50%" : "40%",
              maxHeight: "300px",
              objectFit: "contain",
              userSelect: "none",
              filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          />
        )}

        {/* Contact Information */}
        <Stack
          aria-label="Contact Information"
          spacing={3}
          sx={{
            flex: 1,
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4.5rem",
              fontFamily: "AccentFont",
              color: "var(--primary)",
              textShadow: "0 0 16px var(--primary)",
            }}
          >
            {t("contact.subtitle").toUpperCase()}
          </Typography>

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
              justifyContent: isMobile ? "space-between" : "flex-start",
              gap: 2,
            }}
          >
            <Stack spacing={1}>
              {/* Email */}
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                aria-label="Email"
              >
                <EmailIcon />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile
                      ? "1rem"
                      : isTablet
                      ? "1.2rem"
                      : "1.4rem",
                    color: "var(--off-white)",
                    fontWeight: "bold",
                  }}
                >
                  {t("contact.email")}:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile
                      ? "1rem"
                      : isTablet
                      ? "1.2rem"
                      : "1.4rem",
                    color: "var(--off-white)",
                    fontWeight: 200,
                  }}
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
                <PhoneIcon />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile
                      ? "1rem"
                      : isTablet
                      ? "1.2rem"
                      : "1.4rem",
                    color: "var(--off-white)",
                    fontWeight: "bold",
                  }}
                >
                  {t("contact.phone")}:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile
                      ? "1rem"
                      : isTablet
                      ? "1.2rem"
                      : "1.4rem",
                    color: "var(--off-white)",
                    fontWeight: 200,
                  }}
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
                <AddressIcon />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile
                      ? "1rem"
                      : isTablet
                      ? "1.2rem"
                      : "1.4rem",
                    color: "var(--off-white)",
                    fontWeight: "bold",
                  }}
                >
                  {t("contact.address")}:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: isMobile
                      ? "1rem"
                      : isTablet
                      ? "1.2rem"
                      : "1.4rem",
                    color: "var(--off-white)",
                    fontWeight: 200,
                  }}
                >
                  Helsinki, Finland
                </Typography>
              </Stack>
            </Stack>

            {/* Fun Picture on mobile */}
            {isMobile && (
              <Box
                component="img"
                src="/img/contact-fun.svg"
                alt="Contact Us"
                draggable="false"
                sx={{
                  width: isMobile ? "100%" : isTablet ? "50%" : "40%",
                  maxHeight: "300px",
                  objectFit: "contain",
                  userSelect: "none",
                  filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))",
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
