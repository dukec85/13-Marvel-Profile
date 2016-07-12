  'use strict';
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;
      this.render();
  }

  render() {
    const image = document.querySelector('.series-img');
    image.src = this.data.data.results[0].thumbnail.path + '.jpg';
  }
}
