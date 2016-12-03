require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const handlebars = require('express-handlebars')
				   .create({
						defaultLayout: 'main',
					});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home', {title: 'Homo Rodeo!'});
});

app.get('/about', (req, res) => {
	res.render('about', {title: 'About My Shop of Horrors'});	
});

// custom 404
app.use((req, res, next) => {
	res.status(404);
	res.render('404');
});

// custom 500
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('505');
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
