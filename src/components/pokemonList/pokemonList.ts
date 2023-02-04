/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/pokemonStructure';
import { Card } from '../card/card';
import { Component } from '../component/component';

export class PokemonList extends Component {
  constructor(public selector: string, public pokemonList: PokemonStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    // TEMP (document.querySelector('.main') as HTMLElement).innerHTML = '';
    super.render(place);
    this.pokemonList.forEach((item) => {
      new Card('.pokemons-grid', item);
    });
  }

  createTemplate() {
    return `
    <section class="pokemons">
      <ul class="pokemons-grid">
      </ul>
    </section>
    `;
  }
}
