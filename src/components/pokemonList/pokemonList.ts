/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Pokemon, PokemonStructure } from '../../models/pokemonStructure';
import { PokemonApiRepo } from '../../services/repository/pokemon.api.repo';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './pokemonList.scss';

export class PokemonList extends Component {
  public pokemons: PokemonStructure[];

  constructor(public selector: string, public repo: PokemonApiRepo) {
    super();
    this.pokemons = [];
    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    this.pokemons = await this.repo.loadPokemons();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    // TEMP (document.querySelector('.main') as HTMLElement).innerHTML = '';
    super.render(place);

    this.pokemons.forEach((item) => {
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
