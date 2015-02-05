var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var pg = require('pg');
var handlebars = require('express3-handlebars');
var path = require('path');
var officers = require('./information/officers');
console.log(officers.officers);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
//app.use(express.static(__dirname + '/public'));
app.engine('handlebars', handlebars({defaultLayout : 'master'}));
app.set('view engine', 'handlebars');

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
  response.send('heuheuheuheuehe');
});

function authorize(username, password) {
  //check with database
  //return true, false;
}
app.get('/', function(request, response) {
  response.render('index');
  // var result = ''
  // var times = process.env.TIMES || 5
  // for (i=0; i < times; i++)
  //   result += cool();
  // response.send(result);
});

app.get('/login', function(req, res) {
 /* var result = authorize(req.username, req.password);
    if(result == true) {
      res.render('homepage', {
        'validated': 'true'
      })
    } else {
      res.render('homepage', {
        'validated': 'false'
      })
    }*/
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
