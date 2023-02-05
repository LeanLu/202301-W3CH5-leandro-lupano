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
    console.log(pokemonData);

    let pokemonDataArray: any[] = Object.values(pokemonData);
    pokemonDataArray = pokemonDataArray.slice(3);

    const promises = pokemonDataArray[0].map(async (pokemon: any) => {
      let url = pokemon.url;
      const pokemonsResponse = await fetch(url);
      const pokemonDataResponse = await pokemonsResponse.json();
      return pokemonDataResponse;
    });

    const pokeData = await Promise.all(promises);

    const pokeStructures: any[] = pokeData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      picture: pokemon.sprites.front_default,
      isFavorite: false,
    }));

    return pokeStructures;
  }

  async nextButton(): Promise<PokemonStructure[]> {
    const pokemons = await fetch(this.url);
    const pokemonData = await pokemons.json();

    const newUrl = pokemonData.next;

    const pokemonsNext = await fetch(newUrl);
    const pokemonDataNext = await pokemonsNext.json();

    let pokemonDataArray: any[] = Object.values(pokemonDataNext);
    pokemonDataArray = pokemonDataArray.slice(3);

    const promises = pokemonDataArray[0].map(async (pokemon: any) => {
      let url = pokemon.url;
      const pokemonsResponse = await fetch(url);
      const pokemonDataResponse = await pokemonsResponse.json();
      return pokemonDataResponse;
    });

    const pokeData = await Promise.all(promises);

    const pokeStructures: any[] = pokeData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      weight: pokemon.weight,
      height: pokemon.height,
      picture: pokemon.sprites.front_default,
      isFavorite: false,
    }));

    return pokeStructures;
  }
}
