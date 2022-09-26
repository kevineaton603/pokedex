import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../api/pokemon-api";
import Pokemon from "../../components/Pokemon";
import Layout from "../../layouts/Layout";
import { NamedAPIResource } from "../../models";

const PokedexScreen: React.FC = () => {
  const { data, isLoading } = useQuery<Array<NamedAPIResource>>(
    ["pokemons"],
    () => getPokemons(151)
  );
  return (
    <Layout>
      <div className="my-4 flex w-full max-w-4xl flex-col items-center space-y-4">
        {data?.map((x) => (
          <Pokemon key={x.name} name={x.name} />
        ))}
      </div>
    </Layout>
  );
};

export default PokedexScreen;
