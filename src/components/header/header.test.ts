/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header Component', () => {
  describe('When we instance the Header class', () => {
    test('The mock element should be instance of Header', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Header('slot');
      expect(element).toBeInstanceOf(Header);
    });

    test('The element <img> of Logo should be in the document', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Header('slot');
      const imgLogo = screen.getByRole('img');
      expect(imgLogo).toBeInTheDocument();
    });
  });
});
