import { useQueries, useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getPokemon, getPokemons } from "../../api/pokemon-api";
import Pokemon from "../../components/Pokemon";
import Layout from "../../layouts/Layout";
import { GenerationNumeral } from "../../utils";
import GenerationButton from "./components/GenerationButton";
import { PokeAPI } from "pokeapi-types";

const PokedexScreen: React.FC = () => {
  const [generation, setGeneration] =
    useState<GenerationNumeral>("generation-iii");
  const { data, isLoading } = useQuery<PokeAPI.NamedAPIResource[]>(
    ["pokemons"],
    () => getPokemons(151)
  );
  const pokemonResults = useQueries({
    queries: Array.from(data ?? ([] as PokeAPI.NamedAPIResource[])).map(
      (x) => ({
        queryKey: ["pokemon", x.name],
        queryFn: () => getPokemon(x.name),
        staleTime: Infinity,
      })
    ),
  });

  const pokemons = useMemo(
    () => pokemonResults.map(({ data }) => data),
    [pokemonResults]
  );

  const onClick = (generation: GenerationNumeral) => {
    setGeneration(generation);
  };

  return (
    <Layout>
      <div className="my-4 flex w-full max-w-4xl flex-col items-center space-y-4">
        <div className="flex w-full flex-row justify-evenly ">
          <GenerationButton
            generation="generation-i"
            onClick={onClick}
            selectedGeneration={generation}
          />
          <GenerationButton
            generation="generation-ii"
            onClick={onClick}
            selectedGeneration={generation}
          />
          <GenerationButton
            generation="generation-iii"
            onClick={onClick}
            selectedGeneration={generation}
          />
          <GenerationButton
            generation="generation-iv"
            onClick={onClick}
            selectedGeneration={generation}
          />
          <GenerationButton
            generation="generation-v"
            onClick={onClick}
            selectedGeneration={generation}
          />
          <GenerationButton
            generation="generation-vi"
            onClick={onClick}
            selectedGeneration={generation}
          />
        </div>
        {pokemons?.map((x) =>
          x ? (
            <Pokemon key={x.name} name={x.name} generation={generation} />
          ) : null
        )}
      </div>
    </Layout>
  );
};

export default PokedexScreen;
