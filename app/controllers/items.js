// Clients Controller - handles client logic and client profile logic

module.exports = function(models, logger) {

	return {

		/*
		 * Find Item and Update
		 */

		updateItem: function(id, data) {
			models.items.findByIdAndUpdate(id, data, function(error, number, raw) {
				if (error) {
					logger.info('Users', error);
				}
			});
		},


		/*
		 * Items Methods
		 */

		/*
		 * Get All Items
		 */
		getItem: function(callback) {
			models.items.find({}, function(error, items) {
				if (error) {
					logger.info('items', error);
				}
				callback(items);
			});
		},

		/*
		 * Find items By Id
		 */
		findById: function(id, callback) {
			models.items.findById(id, function(error, items) {
				if (error) {
					logger.info('Users', error);
				}
				callback(items);
			});
		},

		/*
		 * Create New items
		 */
		createItem: function(data, callback) {
			var items = new models.items(data);
			items.save(function(error, data) {
				if (error) {
					console.log(error);
				}
				console.log("NEW Item CREATED id: " + items._id);
				callback(items);
			});
		},

		/*
		 * Delete User by Id
		 */
		deleteItem: function(id) {
			models.items.findByIdAndRemove(id, function(error) {
				if (error) {
					logger.info('items:', error);
				}
			});
		},



		/*
		 * Drop tables
		 *
		 */
		drop: function(callback) {
			models.items.remove({}, function(error) {
				if (callback) {
					callback();
				}
			});
		}
	};
};
