import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getAbility } from "../../api/pokemon-api";
import { PokeAPI } from "pokeapi-types";

type AbilityProps = {
  name: string;
};

const Ability: React.FC<AbilityProps> = ({ name }) => {
  const { data } = useQuery<PokeAPI.Ability>(["ability", name], () =>
    getAbility(name)
  );
  const effectEntry = useMemo(
    () => data?.effect_entries.find((entry) => entry.language.name === "en"),
    [data?.effect_entries]
  );

  return (
    <div className="flex flex-col">
      <div className="text-md capitalize">
        {data?.name.replace("-", " ") ?? ""}
      </div>
      <div className="text-sm">{effectEntry?.short_effect ?? ""}</div>
    </div>
  );
};

export default Ability;
