import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given Footer Component', () => {
  describe('When we instance the Footer class', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Footer('slot');

    test('The mock element should be instance of Footer', () => {
      expect(element).toBeInstanceOf(Footer);
    });

    test('The element <footer> should be in the document', () => {
      const footerMock = screen.getByRole('img');
      expect(footerMock).toBeInTheDocument();
    });
  });
});
