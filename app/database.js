//Database connection

module.exports = function(chalk, db) {
	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function(callback) {
		var host = db.host;
		var port = db.port;
		console.log(chalk.italic.bgCyan.blue(' MongoDB Connected on: ') +
			chalk.italic.bgCyan.black('\t host:' + host + ' port: ' + port + '\t'));
	});
	return db;
};
