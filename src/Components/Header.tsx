import { AppBar, Toolbar, Typography } from "@mui/material";
import { PokeColors } from "./PokeColors";

/**
 * This component renders the header section of the application.
 * It includes the app title "Pokémon Search" displayed at the center, and uses colors defined in the PokeColors module.
 *
 * @returns {ReactNode} A React element representing the header.
 */
function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: PokeColors.primary }}>
      <Toolbar>
        <Typography
          variant="h2"
          color={PokeColors.secondary}
          sx={{ flexGrow: 1, textAlign: "center", padding: 3 }}
        >
          Pokémon Search
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
