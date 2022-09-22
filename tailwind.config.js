module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  safelist: [
    {
      pattern:
        /(bg|to|from)-(normal|fire|water|grass|electric|ice|fighting|poison|ground|flying|bug|rock|dark|ghost|dragon|steel|fairy|psychic)-(light|dark)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        normal: {
          light: "#A8A878",
          dark: "#6D6D4E",
        },
        fire: {
          light: "#F08030",
          dark: "#9C531F",
        },
        water: {
          light: "#6890F0",
          dark: "#445E9C",
        },
        grass: {
          light: "#78C850",
          dark: "#4E8234",
        },
        electric: {
          light: "#F8D030",
          dark: "#A1871F",
        },
        ice: {
          light: "#98D8D8",
          dark: "#638D8D",
        },
        fighting: {
          light: "#C03028",
          dark: "#7D1F1A",
        },
        poison: {
          light: "#A040A0",
          dark: "#682A68",
        },
        ground: {
          light: "#E0C068",
          dark: "#927D44",
        },
        flying: {
          light: "#A890F0",
          dark: "#6D5E9C",
        },
        psychic: {
          light: "#F85888",
          dark: "#A13959",
        },
        bug: {
          light: "#A8B820",
          dark: "#6D7815",
        },
        rock: { light: "#B8A038", dark: "#786824" },
        dark: {
          light: "#705848",
          dark: "#49392F",
        },
        ghost: {
          light: "#705898",
          dark: "#493963",
        },
        dragon: { light: "#7038F8", dark: "#4924A1" },
        steel: { light: "#B8B8D0", dark: "#787887" },
        fairy: { light: "#EE99AC", dark: "#9B6470" },
      },
      fontFamily: {
        pokemon: ["'Pokemon Solid'", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
