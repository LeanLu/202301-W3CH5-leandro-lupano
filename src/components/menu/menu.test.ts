/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu } from './menu';

describe('Given Menu Component', () => {
  describe('When we instance the Menu class', () => {
    test('The mock element should be instance of Menu', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Menu('slot');
      expect(element).toBeInstanceOf(Menu);
    });

    test('The element <img> of Logo should be in the document', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Menu('slot');
      const navigation = screen.getByRole('navigation');
      expect(navigation).toBeInTheDocument();
    });
  });
});
