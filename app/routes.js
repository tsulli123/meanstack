module.exports = function(app, exec, fs) {
	console.log("Server Routes Initialised!");
	var paths = {
		buildFiles: {
			root: './dist'
		}
	}
	//main routing

	//landing page
	app.get('/', function(req, res) {
		res.sendFile('index.html', paths.buildFiles);
	});

	app.get('/login', function(req, res) {
		res.sendFile('login.html', paths.buildFiles);
	})

	/////////////////////////////////////////////////////////
	// Admin routes -> move to separate file later on.
	/////////////////////////////////////////////////////////

	app.post('/admin', function(req, res) {

	})

};
