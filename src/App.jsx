import "./App.css";
import "./styles/fonts.css";
import CustomAppBar from "./components/CustomAppBar";
import { Box, ThemeProvider } from "@mui/material";
import CustomFooter from "./components/CustomFooter";
import useScreenSize from "./hooks/useScreenSize";
import createCustomTheme from "./styles/theme";
import Intro from "./sections/Intro";
import Team from "./sections/Team";

function App() {
  const { isMobile, isTablet } = useScreenSize();

  const theme = createCustomTheme({ isMobile, isTablet });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <CustomAppBar />

        <Intro />

        <Team />

        <CustomFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
