import { PokeAPI } from "pokeapi-types";

export type RomanNumerals = "i" | "ii" | "iii" | "iv" | "v" | "vi";

export type GenerationNumeral = `generation-${RomanNumerals}`;

export const getSprite = (
  generation: GenerationNumeral,
  pokemon?: PokeAPI.Pokemon
): string | undefined | null => {
  switch (generation) {
    case "generation-i":
      return pokemon?.sprites?.versions?.[generation]?.["red-blue"]
        ?.front_transparent;
    case "generation-ii":
      return pokemon?.sprites.versions?.[generation]?.crystal
        ?.front_transparent;
    case "generation-iii":
      return pokemon?.sprites.versions?.[generation]?.emerald?.front_default;
    case "generation-iv":
      return pokemon?.sprites.versions?.[generation]?.platinum?.front_default;
    case "generation-v":
      return pokemon?.sprites.versions?.[generation]?.["black-white"]
        ?.front_default;
    case "generation-vi":
      return pokemon?.sprites?.versions?.[generation]?.[
        "omegaruby-alphasapphire"
      ]?.front_default;
    default:
      return pokemon?.sprites?.other?.["official-artwork"]?.front_default;
  }
};
