import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PokemonList } from './pokemonList';

describe('Given PokemonList Component', () => {
  describe('When we instance the PokemonList class', () => {
    document.body.innerHTML = '<slot></slot>';
    const pokeListMock = [
      {
        id: 50,
        name: 'Pikachu',
        picture:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        weight: 50,
        height: 100,
        isFavorite: false,
        url: '0',
      },
      {
        id: 60,
        name: 'Pikachu',
        picture:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        weight: 50,
        height: 100,
        isFavorite: false,
        url: '0',
      },
    ];

    const element = new PokemonList('slot', pokeListMock);

    test('The mock element should be instance of Card', () => {
      expect(element).toBeInstanceOf(PokemonList);
    });

    test('The element <ul> of the PokemonList should be in the document', () => {
      const listMock = screen.getByRole('list');
      expect(listMock).toBeInTheDocument();
    });
  });
});

// Error en el test.
