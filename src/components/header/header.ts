/* eslint-disable no-unused-vars */
import { Component } from '../component/component';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `
    <header class="header">
      <div class="header__logo">
        <img src="public/pokemon-logo.svg" alt="Pokemon Logo" name="logo">
      </div>
    </header>
    `;
  }
}
