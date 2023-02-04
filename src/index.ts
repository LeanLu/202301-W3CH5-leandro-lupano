/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { PokemonList } from './components/pokemonList/pokemonList';
import { PrevNextButton } from './components/prevNextButton/prevNextButton';
import './index.scss';

new Header('.app');

new Menu('.header');

// Prueba con Pokemón creado en local:

const pokeList = [
  {
    id: '50',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '60',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: '70',
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
];

new PokemonList('.main', pokeList);

new PrevNextButton('.main');
