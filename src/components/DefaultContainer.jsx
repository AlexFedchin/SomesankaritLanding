import Container from "@mui/material/Container";
import useScreenSize from "../hooks/useScreenSize";

const DefaultContainer = ({ children, sx, ...props }) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <Container
      sx={{
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? 4 : isTablet ? 6 : 8,
        py: isMobile ? 2 : isTablet ? 4 : 6,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default DefaultContainer;
