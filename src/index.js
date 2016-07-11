'use strict';

import SeriesInfoView from 'series-info-view';

export default function(element) {

  fetch(`http://gateway.marvel.com:80/v1/public/series/9856?apikey=c4918d145e097447e98576b7c57449f8`)
    .then((res) => res.json())
    .then((data) => {

      const x = new SeriesInfoView(element, data);
      x.render();
    });
}
