import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PrevNextButton } from './prevNextButton';

describe('Given PrevNextButton Component', () => {
  describe('When we instance the PrevNextButton class', () => {
    document.body.innerHTML = '<slot></slot>';
    const nextPokemon = jest.fn();
    const element = new PrevNextButton('slot', nextPokemon);

    test('The mock element should be instance of PrevNextButton', () => {
      expect(element).toBeInstanceOf(PrevNextButton);
    });

    test('The element <div> of the buttons should be in the document', () => {
      const imgButton = screen.getByTitle('div-buttons');
      expect(imgButton).toBeInTheDocument();
    });

    test('It should call the function after click on the Previous button', () => {
      const button = screen.getByTitle('prev-button');
      fireEvent.click(button);
      expect(nextPokemon).toHaveBeenCalled();
    });
  });
});
