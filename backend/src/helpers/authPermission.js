const mongoose = require('mongoose')

const authPermission = (token) => {
	return new Promise((resolve) => {
		const collection = mongoose.connection.db.collection("admin");
	
		collection.find({})
		.toArray(function(_, data){
			if (data[0].permissionToken === String(token)) {
				resolve(true)
			} else {
				resolve(false)
			}
		})
	})
}

module.exports = {
	authPermission
}
