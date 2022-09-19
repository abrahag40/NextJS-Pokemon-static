import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

  try {

    const { data: { id, sprites, name } } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    return {
      id,
      name,
      sprites
    }

  } catch (error) {
    return null;
  }
}