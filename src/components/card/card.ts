/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/pokemonStructure';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public pokemon: PokemonStructure) {
    super();
    this.pokemon = { ...pokemon };
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }

  createTemplate() {
    return `
      <section class="pokemons">
        <ul class="pokemons-grid">
          <li class="card">
            <img class="pokemon-picture" src="${this.pokemon.picture}" alt="${this.pokemon.name}">
            <span class="pokemon-name">${this.pokemon.name}</span>
            <button class="button-add-favorite">⭐Add to favorites</button>
          </li>
        </ul>
      </section>
    `;
  }
}
