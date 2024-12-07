/**
 * This interfaces are used to define the structure of a Pokémon as retrieved from the Pokedex API.
 */
export interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string | null;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface SearchResult {
  name: string;
  url: string;
}
