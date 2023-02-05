/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './prevNextButton.scss';

export class PrevNextButton extends Component {
  constructor(public selector: string, public nextPokemon: () => void) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);

    this.element
      .querySelector('.next-button')
      ?.addEventListener('click', () => {
        this.nextPokemon();
      });
  }

  private createTemplate() {
    return `
    <div class="next-previous-button" title="div-buttons">
      <img src="/prevButton.png" alt="Previous button" name="prev button" class="prev-button" title="prev-button">
      <img src="/nextButton.png" alt="Next button" name="next button" class="next-button">
    </div>
    `;
  }
}
