import React from "react";
import { Box, Divider, Typography, Stack } from "@mui/material";
import LikeIcon from "@mui/icons-material/FavoriteRounded";
import CommentIcon from "@mui/icons-material/CommentRounded";
import RepostIcon from "@mui/icons-material/ReplyRounded";
import ViewsIcon from "@mui/icons-material/PlayArrowRounded";
import SaveIcon from "@mui/icons-material/BookmarkRounded";
import useScreenSize from "../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const IphonePortfolioCard = ({ project, style }) => {
  const { isMobile, isTablet } = useScreenSize();
  const { i18n } = useTranslation();

  return (
    <Box
      aria-label={project.title}
      sx={{
        minWidth: isMobile ? "200px" : "250px",
        maxWidth: isMobile ? "200px" : "250px",
        minHeight: isMobile ? "407.265px" : "509.081px",
        maxHeight: isMobile ? "407.265px" : "509.081px",
        position: "relative",
        background: "transparent",
        boxShadow: "none",
        ...style,
      }}
    >
      {/* iPhone Frame */}
      <Box
        component="img"
        src="/img/iphone-frame.webp"
        alt="iPhone Frame"
        draggable="false"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Content of the phone */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          boxSizing: "border-box",
          px: isMobile ? 2 : 2.5,
          pt: isMobile ? 4.25 : 5.5,
          pb: isMobile ? 2.5 : 3,
          color: "var(--off-black)",
        }}
      >
        {/* Project Image Inside the iPhone Screen */}
        <Box
          component={project.link ? "a" : "div"}
          href={project?.link || null}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "100%",
            minHeight: isMobile ? "189px" : "236.25px",
            maxHeight: isMobile ? "189px" : "236.25px",
            zIndex: 3,
            borderRadius: "10px",
            cursor: project.link ? "pointer" : "default",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            draggable="false"
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "space-evenly",
            color: "var(--off-grey)",
            zIndex: 3,
          }}
        >
          <Stack direction="column" alignItems="center" gap={0.5}>
            <ViewsIcon sx={{ fontSize: 16 }} />
            <Typography variant="card-subtext">
              {project.views || "-"}
            </Typography>
          </Stack>

          <Divider orientation="vertical" flexItem />

          <Stack direction="column" alignItems="center" gap={0.5}>
            <LikeIcon sx={{ fontSize: 16 }} />
            <Typography variant="card-subtext">
              {project.likes || "-"}
            </Typography>
          </Stack>

          <Divider orientation="vertical" flexItem />

          <Stack direction="column" alignItems="center" gap={0.5}>
            <SaveIcon sx={{ fontSize: 16 }} />
            <Typography variant="card-subtext">
              {project.saves || "-"}
            </Typography>
          </Stack>

          <Divider orientation="vertical" flexItem />

          <Stack direction="column" alignItems="center" gap={0.5}>
            <RepostIcon sx={{ fontSize: 16 }} />
            <Typography variant="card-subtext">
              {project.reposts || "-"}
            </Typography>
          </Stack>
        </Box>

        {/* Project Text Inside the iPhone */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "1rem" : isTablet ? "1.2rem" : "1.5rem",
              hyphens: "auto",
              textOverflow: "ellipsis",
              textAlign: "left",
              zIndex: 3,
              my: -0.5,
            }}
          >
            {project.title}
          </Typography>

          <Divider
            width="100%"
            sx={{
              zIndex: 3,
              background: "var(--off-black)",
            }}
          />

          <Typography
            variant="body1"
            lang={i18n.language}
            sx={{
              fontSize: isMobile ? "0.75rem" : isTablet ? "0.85rem" : "0.95rem",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              hyphens: "auto",
              textAlign: "left",
              zIndex: 3,
              WebkitHyphens: "auto",
              msHyphens: "auto",
            }}
          >
            {project.description.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                <Box
                  component="img"
                  src="/img/icons/flash-glow.webp"
                  sx={{
                    maxHeight: isMobile ? "14px" : isTablet ? "16px" : "18px",
                    width: "auto",
                    mb: isMobile ? "-3px" : isTablet ? "-4px" : "-5px",
                  }}
                />{" "}
                {line}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IphonePortfolioCard;
