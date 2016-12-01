require('dotenv').config();
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

// custom 404
app.use((req, res) => {
	res.type('text/plain');
	res.status('404');
	res.send('404 - Resource Not Found');
});


// custom 500
app.use((err, req, res, next) =>  {
	console.error(err.stack);

	res.type('text/plain');
	res.status(500);
	res.send('500 - Internal Server Error');
});

app.listen(app.get('port'), () => {
	console.log(`Express started on http://localhost: {app.get('port')};
		Press Ctrl-C to terminate`);	
});
