/* eslint-disable capitalized-comments */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { PokemonList } from './components/pokemonList/pokemonList';
import { PrevNextButton } from './components/prevNextButton/prevNextButton';
import './index.scss';
import { PokemonApiRepo } from './services/repository/pokemon.api.repo';

new Header('.app');

new Menu('.header');

// Prueba con Pokemón creado en local:

const pokeList = [
  {
    id: 50,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 60,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 70,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 40,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 40,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 50,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 50,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 80,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 80,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 90,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 90,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
  {
    id: 50,
    name: 'Pikachu',
    picture:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    weight: 50,
    height: 100,
    isFavorite: false,
  },
];

// TEMP: new PokemonList('.main', pokeList);
new PrevNextButton('.main');
new Footer('.main');
// new PokemonApiRepo();

new PokemonList('.main', new PokemonApiRepo());
