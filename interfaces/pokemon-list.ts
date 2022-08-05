export interface PokemonListRespones {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  key: number;
  name: string;
  url: string;
  image: string;
}