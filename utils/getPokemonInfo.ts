import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async ( nameOrId: string ) => {

  const { data: { id, sprites, name } } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id,
    name,
    sprites
  }

}