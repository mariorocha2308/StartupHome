const mongoose = require('mongoose')

const authTokenAdmin = (req, res) => {
	const { token } = req.body

  try {
    const collection  = mongoose.connection.db.collection("admin");

		collection.find({})
		.toArray(function(_, data){
			if (data[0].sessionToken === String(token)) {
				res.json({ isAuth: true, permissionToken: data[0].permissionToken })
			} else {
				res.json({ isAuth: false })
			}
		})
  } catch (error) {
    return res.send({ error: "Error execute authTokenAdmin" })
  }
}

module.exports = {
  authTokenAdmin,
};
