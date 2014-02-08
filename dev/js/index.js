requirejs.config({
  baseUrl: './',
  hbs: {
    disableI18n: true
  },
  packages: [
    {
      "name": "almond",
      "location": "bower_components/almond",
      "main": "almond"
    },
    {
      "name": "handlebars",
      "location": "bower_components/handlebars",
      "main": "Handlebars"
    },
    {
      "name": "hbs",
      "location": "bower_components/hbs",
      "main": "hbs"
    },
    {
      "name": "requirejs",
      "location": "bower_components/requirejs",
      "main": "require"
    }
  ]
});

define(function (require) {
  var tmpl = require('hbs!../templates/moo.html');

  alert(tmpl());
});
