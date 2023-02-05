/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './prevNextButton.scss';

export class PrevNextButton extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
    <div class="next-previous-button" title="div-buttons">
      <img src="/prevButton.png" alt="Previous button" name="prev button">
      <img src="/nextButton.png" alt="Next button" name="next button">
    </div>
    `;
  }
}
