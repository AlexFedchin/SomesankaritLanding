import "./App.css";
import "./styles/fonts.css";
import "./styles/global.css";
import CustomAppBar from "./components/CustomAppBar";
import { Box, ThemeProvider } from "@mui/material";
import CustomFooter from "./components/CustomFooter";
import useScreenSize from "./hooks/useScreenSize";
import createCustomTheme from "./styles/theme";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Team from "./sections/Team";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Contact from "./sections/Contact";
import Prices from "./sections/Prices";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";

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
          gap: 4,
          alignItems: "center",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <CustomAppBar />

        <Intro />

        <About />

        <Team />

        <Portfolio />

        <Services />

        <Contact />

        <CustomFooter />

        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
