import { Box, Card, CardContent, Typography } from "@mui/material";
import { Pokemon } from "./types";
import { PokeColors } from "./PokeColors";

/**
 * This component renders a card displaying information about a Pokémon.
 * It shows the Pokémon's image, name, ID, and types using the data passed via props.
 *
 * @param {Pokemon} pokemon The Pokémon object containing data like name, id, sprite, and types.
 * @returns {ReactNode} A React element representing the Pokémon card.
 */
function PokeCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card sx={{ minWidth: "35vh", backgroundColor: PokeColors.primary }}>
      <Box
        minHeight="30vh"
        minWidth="30vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          src={pokemon.sprites.front_default ?? ""}
          alt={pokemon.name}
          sx={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            transform: "scale(2)",
          }}
        />
      </Box>

      <CardContent>
        <Typography
          variant="h5"
          component="div"
          textTransform="capitalize"
          color={PokeColors.secondary}
        >
          {pokemon.name}
        </Typography>
        <Typography variant="h6" color={PokeColors.secondary}>
          Pokedex ID: {pokemon.id}
        </Typography>
        <Typography variant="h6" color={PokeColors.secondary}>
          Types: {pokemon.types.map((type) => type.type.name).join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokeCard;
