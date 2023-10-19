import { PokeAPI } from "pokeapi-types";

const BASE_URI = "https://pokeapi.co/api/v2";

export const getPokemons = async (limit = 1000, offset = 0) => {
  const response = await fetch(
    `${BASE_URI}/pokemon?limit=${limit}&offset=${offset}`
  );
  const json = await response.json();
  return json.results as Array<PokeAPI.NamedAPIResource>;
};

export const getPokemon = async (value: string | number) => {
  const response = await fetch(`${BASE_URI}/pokemon/${value}`);
  const json = await response.json();
  return json as PokeAPI.Pokemon;
};

export const getManyPokemon = async (values: Array<string | number>) => {
  const requests = values.map((value) => getPokemon(value));
  const responses = await Promise.all(requests);
  return responses as Array<PokeAPI.Pokemon>;
};

export const getAbility = async (value: string | number) => {
  const response = await fetch(`${BASE_URI}/ability/${value}`);
  const json = await response.json();
  return json as PokeAPI.Ability;
};

export const getSpecies = async (value: string | number) => {
  const response = await fetch(`${BASE_URI}/pokemon-species/${value}`);
  const json = await response.json();
  return json as PokeAPI.PokemonSpecies;
};

export const getEvolution = async (value: string | number) => {
  const response = await fetch(`${BASE_URI}/evolution-chain/${value}`);
  const json = await response.json();
  return json as PokeAPI.EvolutionChain;
};

export const getEvolutionTrigger = async (value: string | number) => {
  const response = await fetch(`${BASE_URI}/evolution-trigger/${value}`);
  const json = await response.json();
  return json as PokeAPI.EvolutionTriggers;
};
