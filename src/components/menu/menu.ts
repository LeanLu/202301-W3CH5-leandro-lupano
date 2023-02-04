/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './menu.scss';

export type MenuOption = {
  label: string;
  path: string;
};

export class Menu extends Component {
  public menuOptions: MenuOption[];

  constructor(public selector: string) {
    super();
    this.menuOptions = [
      { label: 'Home', path: '/index.html' },
      { label: 'Favorites', path: '/favorites.html' },
      { label: 'Details', path: '/details.html' },
    ];
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    const items = this.menuOptions
      .map((item) => `<li> <a href="${item.path}"> ${item.label} </a> </li>`)
      .join('');

    return `
      <nav class="menu">
        <ul>
          ${items}
        </ul>
      </nav>
    `;
  }
}
