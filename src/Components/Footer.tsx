import { Box, Link, Typography } from "@mui/material";
import { PokeColors } from "./PokeColors";

/**
 * This component renders the footer section of the application.
 * It includes a link to the PokéAPI and uses colors defined in the PokeColors module.
 *
 * @returns {ReactNode} A React element representing the footer.
 */
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: PokeColors.primary,
        color: "white",
        padding: 2,
        textAlign: "center",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" color={PokeColors.secondary}>
        Using{" "}
        <Link
          href="https://pokeapi.co/"
          underline="hover"
          color={PokeColors.secondary}
        >
          PokéAPI
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
