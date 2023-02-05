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
// new PrevNextButton('.main', new PokemonApiRepo());
new Footer('.main');
new PokemonList('.main', new PokemonApiRepo());
