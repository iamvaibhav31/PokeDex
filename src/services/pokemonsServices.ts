import client from "@/utils/apolloClient";
import {
  GET_POKEMONS,
  GET_POKEMONATTACKS_BYID,
  GET_POKEMONDETAILS_BYID,
} from "./querys/pokemonQuerys";

export const GetPokemonsApi = (first: number) => {
  return client.query({
    query: GET_POKEMONS,
    variables: { first: first * 20 },
  });
};

export const GetPokemonDetailsApi = (id: string, name: string) => {
  return client.query({
    query: GET_POKEMONDETAILS_BYID,
    variables: {
      id: id,
      name: name,
    },
  });
};

export const GetPokemonAttacksApi = (id: string, name: string) => {
  return client.query({
    query: GET_POKEMONATTACKS_BYID,
    variables: {
      id: id,
      name: name,
    },
  });
};
