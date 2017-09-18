//Server Connection Module

module.exports = (http, serverPort, theme) => {

	var server = http.listen(serverPort, () => {

		var info = {
			host: server.address().address,
			port: server.address().port
		};

		console.log(theme('Default server \n'));
		console.log(theme('Server listening on: ' + JSON.stringify(info)));
	});

	return server;
};
