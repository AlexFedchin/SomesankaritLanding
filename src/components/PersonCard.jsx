import { Box, Stack, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const PersonCard = ({ image, firstName, secondName, roles, description }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Stack
      direction={isMobile || isTablet ? "column" : "row"}
      spacing={isMobile ? 2 : isTablet ? 4 : 8}
      alignItems="center"
    >
      <Box
        aria-label="Person Image Wrapper"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.02)",
          height: "250px",
          width: "250px",
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={`${firstName} ${secondName}`}
          draggable="false"
          sx={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 2,
            userSelect: "none",
          }}
        />
      </Box>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
          }}
        >
          {/* Name */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: isMobile ? "3rem" : isTablet ? "4rem" : "5rem",
                fontFamily: "AccentFont",
                lineHeight: isMobile ? "36px" : isTablet ? "49px" : "60px",
                userSelect: "none",
              }}
            >
              {firstName}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "var(--primary)",
                fontSize: isMobile ? "4rem" : isTablet ? "5rem" : "6rem",
                fontFamily: "AccentFont",
                lineHeight: isMobile ? "48px" : isTablet ? "61px" : "72px",
                letterSpacing: 2,
                textShadow: "0 0 16px var(--primary)",
                userSelect: "none",
              }}
            >
              {secondName.toUpperCase()}
            </Typography>
          </Stack>

          {/* Roles */}
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {roles.map((role) => (
              <Box
                key={role}
                sx={{
                  py: 0.5,
                  px: 2,
                  height: "fit-content",
                  borderRadius: "4px",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: isMobile ? "1rem" : isTablet ? "1.5rem" : "2rem",
                    letterSpacing: 4,
                    color: "var(--off-white)",
                    userSelect: "none",
                    fontFamily: "AccentFont",
                  }}
                >
                  {role.toUpperCase()}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "2px",
            width: "100%",
            background:
              "linear-gradient(-45deg, transparent 20%, var(--primary) 100%)",
          }}
        />

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
            fontSize: isMobile ? "0.9rem" : isTablet ? "1.15rem" : "1.25rem",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PersonCard;
