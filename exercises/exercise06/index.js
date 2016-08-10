const axios = require('axios');
const Ractive = require('ractive/ractive.runtime');

const template = require('./template.ract');

const el = document.getElementById('container');
const username = 'mzabriskie';
const view = new Ractive({el, template});

axios(`https://api.github.com/users/${username}/repos?per_page=250`)
  .then((response) => {
    view.set({
      repos: response.data
    });
  });
