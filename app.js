const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/overwatch');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
	console.log(`There was an error connecting to the DB: ${err}`);
});


const app = require('./src/server/App');

/**
 * Get Port from env and store in express
 */
const port = process.env.PORT || 3001;
app.set('port', port);

const server = app.listen(port, () => {
	console.log(`App Listening on Port ${server.address().port}`);
});

