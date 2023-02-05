/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card';

describe('Given Card Component', () => {
  describe('When we instance the Card class', () => {
    document.body.innerHTML = '<slot></slot>';
    const pokemonMock = {
      id: 999,
      name: 'Pikachu',
      picture:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      weight: 50,
      height: 100,
      isFavorite: false,
    };
    const element = new Card('slot', pokemonMock);

    test('The mock element should be instance of Card', () => {
      expect(element).toBeInstanceOf(Card);
    });

    test('The element <img> of the Pokemon should be in the document', () => {
      const imageMock = screen.getByRole('img');
      expect(imageMock).toBeInTheDocument();
    });
  });
});
