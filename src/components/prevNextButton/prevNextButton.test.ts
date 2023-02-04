import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PrevNextButton } from './prevNextButton';

describe('Given PrevNextButton Component', () => {
  describe('When we instance the PrevNextButton class', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new PrevNextButton('slot');

    test('The mock element should be instance of PrevNextButton', () => {
      expect(element).toBeInstanceOf(PrevNextButton);
    });

    test('The element <img> of the buttons should be in the document', () => {
      const imgButton = screen.getByTitle('div-buttons');
      expect(imgButton).toBeInTheDocument();
    });
  });
});
