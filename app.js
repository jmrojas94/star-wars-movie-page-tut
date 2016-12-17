var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// home
app.get('/', routes.home);

// movieSingle
app.get('/star_wars_episode/:episode_number?', routes.movieSingle);

// notFound
app.get('*', routes.notFound);

app.listen(3000, function() {
	console.log("The app is running on localhost:3000")
});