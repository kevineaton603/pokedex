import { useQuery } from "@tanstack/react-query";
import { Pokemon as PokemonType } from "../../models";
import { useMemo } from "react";
import { getPokemon } from "../../api/pokemon-api";
import Ability from "./Ability";
import { useInView } from "react-intersection-observer";
import PokeballSpinner from "../pokeball-spinner/PokeballSpinner";
import { GenerationNumeral } from "../../utils";

const getSprite = (generation: GenerationNumeral, pokemon?: PokemonType) => {
  switch (generation) {
    case "generation-i":
      return pokemon?.sprites.versions[generation]["red-blue"]
        .front_transparent;
    case "generation-ii":
      return pokemon?.sprites.versions[generation].crystal.front_transparent;
    case "generation-iii":
      return pokemon?.sprites.versions[generation].emerald.front_default;
    case "generation-iv":
      return pokemon?.sprites.versions[generation].platinum.front_default;
    case "generation-v":
      return pokemon?.sprites.versions[generation]["black-white"].front_default;
    case "generation-vi":
      return pokemon?.sprites.versions[generation]["omegaruby-alphasapphire"]
        .front_default;
    default:
      return pokemon?.sprites.other?.["official-artwork"].front_default;
  }
};

type PokemonProps = {
  name: string;
  generation: GenerationNumeral;
};

const Pokemon: React.FC<PokemonProps> = ({ name, generation }) => {
  const { data, isLoading } = useQuery<PokemonType>(["pokemon", name], () =>
    getPokemon(name)
  );
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  const gameIndex = useMemo(
    () => data?.game_indices.find((x) => x.version.name === "gold")?.game_index,
    [data?.game_indices]
  );

  const imageBackgroundClassNames = useMemo(() => {
    const [type1, type2] = data?.types ?? [];
    if (type2) {
      return ` bg-gradient-to-b from-${type1.type.name}-light to-${type2.type.name}-light dark:from-${type1.type.name}-dark dark:to-${type2.type.name}-dark`;
    }
    if (type1) {
      return ` bg-${type1?.type.name}-light dark:bg-${type1?.type.name}-dark`;
    }
    return "";
  }, [data?.types]);

  return !isLoading ? (
    <div
      ref={ref}
      className={`${
        inView ? "translate-y-0 opacity-100 " : "translate-y-20 opacity-0"
      } flex w-full grid-cols-5 flex-row items-start gap-4 rounded-sm p-4 shadow-xl transition-all duration-500 hover:ring-2 hover:ring-white dark:bg-slate-600 hover:dark:bg-slate-500 sm:grid md:grid-cols-8`}
    >
      <div className={`col-span-1 flex-none`}>
        <div className={`${imageBackgroundClassNames} h-20 w-20 rounded-full`}>
          <img
            className={`h-20 w-20 p-2`}
            src={getSprite(generation, data) ?? ""}
            alt={data?.name}
            loading={"lazy"}
            style={{ imageRendering: "pixelated" }}
          />
        </div>
      </div>
      <div className="col-span-4 flex grow flex-col items-start md:col-span-2">
        <h2 className="text-xl">
          {`#${gameIndex} ${data?.name.toLocaleUpperCase()}`}
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            {data?.types.map((type) => (
              <div
                key={type.type.name}
                className={
                  "text-md w-20 rounded-sm text-center" +
                  ` bg-${type.type.name}-light dark:bg-${type.type.name}-dark`
                }
              >
                {type.type.name.toLocaleUpperCase()}
              </div>
            )) ?? null}
          </div>
          <div className="text-sm">{`Height: ${
            (data?.height ?? 0) / 10
          }m`}</div>
          <div className="text-sm">{`Weight: ${
            (data?.weight ?? 0) / 10
          }kg`}</div>
        </div>
      </div>
      <div className="col-span-5 hidden flex-col sm:flex">
        {data?.abilities
          .filter((ability) => !ability.is_hidden)
          .map((ability) => (
            <Ability key={ability.ability.name} name={ability.ability.name} />
          )) ?? null}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

const Loading: React.FC = () => {
  return (
    <div className="flex w-full animate-pulse flex-row items-start space-x-4 rounded-sm p-4 shadow-xl dark:bg-slate-600">
      <PokeballSpinner className="h-20 w-20 flex-none space-y-6"></PokeballSpinner>
      <div className="flex grow flex-col space-y-1">
        <div className="h-4 w-full rounded bg-slate-700"></div>
        <div className="h-4 w-full rounded bg-slate-700"></div>
        <div className="h-3 w-full rounded bg-slate-700"></div>
        <div className="h-3 w-full rounded bg-slate-700"></div>
      </div>
    </div>
  );
};

export default Pokemon;
