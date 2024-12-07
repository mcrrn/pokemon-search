import Pokedex from "pokedex-promise-v2";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { Pokemon } from "./types";
import PokeSearch from "./PokeSearch";

const P = new Pokedex();

/**
 * This component allows the user to search for a Pokémon and displays the selected Pokémon's details in a card.
 * It manages the selected Pokémon state and passes it down to the `PokeCard` component for display.
 *
 * @returns {ReactNode} A React element representing the Pokémon selector and display.
 */
function PokeSelector() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    P.getPokemonByName("pikachu", (response, error) => {
      if (!error) {
        setSelectedPokemon(response);
      } else {
        console.log(error);
      }
    });
  }, []);

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 5,
        }}
      ></Box>

      <Box
        sx={{
          textTransform: "capitalize",
          minHeight: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PokeSearch onSelectPokemon={handlePokemonSelect} />
        <>{selectedPokemon && <PokeCard pokemon={selectedPokemon} />} </>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      ></Box>
    </>
  );
}

export default PokeSelector;
