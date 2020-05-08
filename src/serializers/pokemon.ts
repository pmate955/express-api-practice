import { Pokemon } from "../models/pokemon";

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  }
  isHidden: boolean;
  slot: number;
}

interface PokemonResponse {
  name: string;
  height: number;
  weight: number;
  abilities: Array<PokemonAbility>;
}

export const show = (pokemon: PokemonResponse): Pokemon => {
  const abilities = [];
  for(const ability of pokemon.abilities) {
    abilities.push(ability.ability.name);
  }
  let response: Pokemon = {
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    abilities
  } 
  return response;
};