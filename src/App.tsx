import { Box, CssBaseline } from "@mui/material";
import PokeSelector from "./Components/PokeSelector";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { PokeColors } from "./Components/PokeColors";

/**
 * This is the main component of the application, which structures the layout and includes other components.
 * It includes a header, main content area (with the Pokémon selector), and a footer.
 *
 * @returns {ReactNode} A React element representing the entire application layout.
 */
function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: PokeColors.secondary,
        }}
      >
        <Header />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <PokeSelector />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
