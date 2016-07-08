'use strict';

export default function(marvel) {
  fetch(`http://gateway.marvel.com:80/v1/public/series/9856?apikey=c4918d145e097447e98576b7c57449f8`)
    .then((response) => response.json())
    .then((info) => {

    });
}
