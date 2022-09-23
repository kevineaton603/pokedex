import { useQuery } from "@tanstack/react-query";
import { NamedAPIResource } from "../models";
import { getPokemons } from "../api/pokemon-api";
import Pokemon from "../components/Pokemon";

const PokedexView: React.FC = () => {
  const { data, isLoading } = useQuery<Array<NamedAPIResource>>(
    ["pokemons"],
    () => getPokemons(151)
  );
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center dark:bg-slate-700 dark:text-white">
      <header className="sticky top-0 mb-2 flex min-h-full w-full flex-col items-center justify-center pb-2 dark:bg-slate-800 sm:p-2">
        <h1 className="mb-2 font-pokemon text-4xl tracking-widest sm:mb-0 sm:p-2">
          POKEDEX
        </h1>
      </header>
      <div className="my-4 flex w-full max-w-4xl flex-col items-center space-y-4">
        {data?.map((x) => (
          <Pokemon key={x.name} name={x.name} />
        ))}
      </div>
    </main>
  );
};

export default PokedexView;
