/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return `
    <footer class="footer">
      <p>© Copyright</p>
      <img src="/pikachu-back.png" alt="Pikachu from back" width="100px">
    </footer>
    `;
  }
}
