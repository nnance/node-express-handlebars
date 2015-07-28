var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

var hbs = exphbs.create({
  defaultLayout: 'main',
  // Specify helpers which are only registered on this instance.
  helpers: {
    loop: function(count, options) {
      var out = '';
      for(var i = 1; i <= count; ++i) {
        out += options.fn(i);
      }
      return out;
    }
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.use('/lib', express.static('node_modules'));
app.use('/css', express.static('css'));
app.listen(3000);
