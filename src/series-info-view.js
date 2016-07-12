  'use strict';
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

  }

  render() {
    let image = this.element.querySelector('.stuff');
    image.src = this.data.data.results[0].thumbnail.path + '.jpg';
  }
}
