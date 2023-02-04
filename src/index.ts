/* eslint-disable no-new */
import { Card } from './components/card/card';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import './index.scss';
import { Pokemon } from './models/pokemonStructure';

new Header('.app');

new Menu('.header');

const pikachu = new Pokemon(
  'Pikachu',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  50,
  100
);

new Card('.main', pikachu);
