export const getBackgroundType = type => {
  switch (type) {
    case 'bug':
      return '#C6D16E';
    case 'dragon':
      return '#A27DFA';
    case 'electric':
      return '#FAE078';
    case 'fairy':
      return '#F4BDC9';
    case 'fighting':
      return '#D67873';
    case 'fire':
      return '#F5AC78';
    case 'flying':
      return '#A1BBEC';
    case 'ghost':
      return '#705898';
    case 'grass':
      return '#A7DB8D';
    case 'ground':
      return '#E0C068';
    case 'ice':
      return '#BCE6E6';
    case 'normal':
      return '#d9d9d9';
    case 'psychic':
      return '#ffadd2';
    case 'poison':
      return '#d3adf7';
    case 'rock':
      return '#C9BB8A';
    case 'water':
      return '#91d5ff';
    default:
      break;
  }
};

export const getType = type => {
  switch (type) {
    case 'bug':
      return '#A8B820';
    case 'dragon':
      return '#7038F8';
    case 'electric':
      return '#F8D030';
    case 'fairy':
      return '#EE99AC';
    case 'fighting':
      return '#C03028';
    case 'fire':
      return '#F08030';
    case 'flying':
      return '#A890F0';
    case 'ghost':
      return '#A292BC';
    case 'grass':
      return '#52c41a';
    case 'ground':
      return '#927D44';
    case 'ice':
      return '#98D8D8';
    case 'normal':
      return '#bfbfbf';
    case 'psychic':
      return '#F85888';
    case 'poison':
      return '#B763CF';
    case 'rock':
      return '#B8A038';
    case 'steel':
      return '#B8B8D0';
    case 'water':
      return '#83B2FF';
    default:
      break;
  }
};

export const loadPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const fetchPokemon = await fetch(url);
  const pokemonData = await fetchPokemon.json();

  return pokemonData;
};

export const loadSelectedPokemon = async url => {
  const fetchPokemon = await fetch(url);
  const pokemonData = await fetchPokemon.json();

  return pokemonData;
};

export const getPokemonImage = pokemonId => {
  return (
    'https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/' +
    pokemonId +
    '.svg'
  );
};
