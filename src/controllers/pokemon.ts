import { Request, Response } from "express";
import Axios from "axios";
import  * as pokemonSerializer from '../serializers/pokemon';

const baseUrl = 'https://pokeapi.co/api/v2';

export interface PokemonApiResponse {
  name: string;
  url: string;
}

export const index = async (req: Request, res: Response) => {
  const response = await Axios({
    method: 'get',
    url: `${baseUrl}/pokemon`
  });
  console.log(response.data);
  res.send(response.data.results);
};

export const show = async (req: Request, res: Response) => {
  const name = req.params.name;
  const pokemons: Array<PokemonApiResponse> = (await Axios({
    method: 'get',
    url: `${baseUrl}/pokemon`
  })).data.results;
  let pokemon = pokemons.find((record) => record.name === name);
  if(pokemon) {
    const details = await Axios({
      method: 'get',
      url: pokemon.url
    });
    res.send(pokemonSerializer.show(details.data));
  } else {
    res.sendStatus(404);
  }
  
};