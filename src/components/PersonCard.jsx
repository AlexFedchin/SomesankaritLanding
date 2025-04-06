import { Box, Stack, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const PersonCard = ({ image, firstName, secondName, roles, description }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Box
      sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Stack
        direction="row"
        spacing={isMobile ? 2 : isTablet ? 4 : 8}
        alignItems="center"
      >
        <Box
          aria-label="Person Image Wrapper"
          className="light-bg-blur"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.02)",
            height: isMobile ? "100px" : isTablet ? "150px" : "250px",
            width: isMobile ? "100px" : isTablet ? "150px" : "250px",
            borderRadius: 2,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={`${firstName} ${secondName}`}
            draggable="false"
            sx={{
              width: isMobile ? "100px" : isTablet ? "150px" : "250px",
              height: isMobile ? "100px" : isTablet ? "150px" : "250px",
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
              flexDirection: isMobile || isTablet ? "column" : "row",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "space-between",
              alignItems: isMobile || isTablet ? "flex-start" : "flex-end",
            }}
          >
            {/* Name */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: isMobile ? 1 : 2,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="styled-title"
                fontFamily="AccentFont"
                sx={{
                  color: "var(--off-white)",
                  textShadow: "none",
                  userSelect: "none",
                }}
              >
                {firstName}
              </Typography>
              <Typography
                variant="styled-title"
                fontFamily="AccentFont"
                sx={{
                  letterSpacing: 2,
                  userSelect: "none",
                }}
              >
                {secondName.toUpperCase()}
              </Typography>
            </Box>

            {/* Roles */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: isMobile ? 1 : 2,
                flexWrap: "wrap",
              }}
            >
              {roles.map((role) => (
                <Box
                  key={role}
                  className="light-bg-blur"
                  sx={{
                    py: 0.5,
                    px: 2,
                    height: "fit-content",
                    borderRadius: "4px",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: isMobile
                        ? "1rem"
                        : isTablet
                        ? "1.5rem"
                        : "2rem",
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

          {!isMobile && !isTablet && (
            <>
              {/* Divider */}
              <Box
                sx={{
                  height: "2px",
                  width: "100%",
                  background:
                    "linear-gradient(to right, var(--primary) 0%, var(--primary) 50%, transparent 100%)",
                }}
              />
              {/* Description */}
              <Typography variant="body-text">{description}</Typography>
            </>
          )}
        </Stack>
      </Stack>

      {isMobile || isTablet ? (
        <>
          {/* Divider */}
          <Box
            sx={{
              height: "2px",
              width: "100%",
              background:
                "linear-gradient(to right, var(--primary) 0%, var(--primary) 50%, transparent 100%)",
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
        </>
      ) : null}
    </Box>
  );
};

export default PersonCard;
