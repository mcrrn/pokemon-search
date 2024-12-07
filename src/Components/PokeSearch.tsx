import Pokedex from "pokedex-promise-v2";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Pokemon, SearchResult } from "./types";

const P = new Pokedex();

interface PokeSearchProps {
  onSelectPokemon: (pokemon: Pokemon) => void;
}

/**
 * This component renders a Pokémon search input field where users can search for Pokémon by name.
 * It allows users to select a Pokémon from the suggestions, which is then passed to a parent component.
 *
 * @param {Function} onSelectPokemon Callback function passed via props to handle the selected Pokémon.
 * @returns {ReactNode} A React element representing the Pokémon search component.
 */
function PokeSearch(props: PokeSearchProps) {
  const [allPokemon, setAllPokemon] = useState<SearchResult[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    preloadPokemons();
  }, []);

  const preloadPokemons = async () => {
    try {
      const response = await P.getPokemonsList();
      console.log(response.results);
      setAllPokemon(response.results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  const handlePokemonSelect = async (
    event: any,
    value: SearchResult | null
  ) => {
    if (value) {
      try {
        const response = await P.getPokemonByName(value.name);
        console.log(response);
        setSelectedPokemon(response);
        props.onSelectPokemon(response);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    } else {
      console.log("No Pokémon selected");
    }
  };

  return (
    <Autocomplete
      id="pokemon-search"
      sx={{ width: 300, mb: 2 }}
      options={allPokemon}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{
              textTransform: "capitalize",
            }}
            {...optionProps}
          >
            {option.name}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search for a pokémon" />
      )}
      onChange={handlePokemonSelect}
    />
  );
}

export default PokeSearch;
