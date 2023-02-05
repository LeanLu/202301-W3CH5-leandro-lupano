/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import {
  PokemonStructure,
  ProtoPokemonStructure,
} from '../../models/pokemonStructure';

export interface PokemonApiRepoStructure {
  loadPokemons(): Promise<PokemonStructure[]>;
  getPokemon(id: PokemonStructure['id']): Promise<PokemonStructure>;
  createProkemon(pokemon: PokemonStructure): Promise<PokemonStructure>;
  update(pokemon: Partial<ProtoPokemonStructure>): Promise<PokemonStructure>;
  delete(id: PokemonStructure['id']): Promise<void>;
}

export class PokemonApiRepo {
  url: string;

  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  async loadPokemons(): Promise<PokemonStructure[]> {
    const pokemons = await fetch(this.url);
    const pokemonData = await pokemons.json();

    let pokemonDataArray: any[] = Object.values(pokemonData);
    pokemonDataArray = pokemonDataArray.slice(3);

    console.log(pokemonDataArray[0]);

    const promises = pokemonDataArray[0].map(async (pokemon: any) => {
      let url = pokemon.url;
      const pokemonsResponse = await fetch(url);
      const pokemonDataResponse = await pokemonsResponse.json();
      return pokemonDataResponse;
    });

    const pokeData = await Promise.all(promises);
    console.log(pokeData);
    const pokeStructures: any[] = pokeData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      picture: pokemon.sprites.front_default,
      isFavorite: false,
    }));
    console.log(pokeStructures);

    return pokeStructures;
  }
}
