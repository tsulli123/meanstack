/*
 * Item Schema
 * Item Data
 */
module.exports = function(mongoose, schemas) {

	schemas['Item'] = mongoose.Schema({
		name: String,
		price: Number
	});
	return mongoose.model('Item', schemas.Wedding);
};
