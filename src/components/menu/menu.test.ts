/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu } from './menu';

describe('Given Menu Component', () => {
  describe('When we instance the Menu class', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Menu('slot');

    test('The mock element should be instance of Menu', () => {
      expect(element).toBeInstanceOf(Menu);
    });

    test('The element <nav> of Menu should be in the document', () => {
      const navigation = screen.getByRole('navigation');
      expect(navigation).toBeInTheDocument();
    });
  });
});
