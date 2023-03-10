/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <header class="header">
      <div class="header__logo">
        <img src="/pokemon-logo.svg" alt="Pokemon Logo" name="logo">
      </div>
    </header>
    <div class="subtitle">
      <p>Poke List :</p>
    </div>
    `;
  }
}
