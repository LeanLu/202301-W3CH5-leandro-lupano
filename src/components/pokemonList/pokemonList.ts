/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { PokemonStructure } from '../../models/pokemonStructure';
import { Card } from '../card/card';
import { Component } from '../component/component';
import { PrevNextButton } from '../prevNextButton/prevNextButton';
import './pokemonList.scss';

export class PokemonList extends Component {
  public pokemons: PokemonStructure[];

  constructor(public selector: string, public repo: any) {
    super();
    this.pokemons = [];
    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    this.pokemons = await this.repo.loadPokemons();
    this.render('afterbegin');
  }

  async nextPokemon() {
    (document.querySelector('.main') as HTMLElement).innerHTML = '';
    this.pokemons = await this.repo.nextButton();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);

    new PrevNextButton('.main', this.nextPokemon.bind(this));

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
