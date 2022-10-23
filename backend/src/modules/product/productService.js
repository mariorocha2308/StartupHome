const { models } = require('../../models/index')
const { authPermission } = require('../../helpers/authPermission')

const getProducts = async (_, res) => {
  try {
    const products = await models.Product.find({})

		res.json(products)
  } catch (error) {
    return res.send({ error: "Error in getProducts" })
  }
}

const createProduct = async (req, res) => {
	const { title, description, price, discount } = req.body
	const token = req.headers.authorization.split(' ')[1]

  try {
		const isPermission = await authPermission(token)

		if (isPermission) {
			const product = new models.Product({
				title, description, price, discount
			})

			product.save((err) => {
				if (err) {
					res.send({error: "Producto no se pudo crear"})
					return;
				}
				res.send({ message: "Producto creado"})
			})
		} else {
			res.send({error: "Permiso denegado"})
		}
  } catch (error) {
    return res.send({ error: "Error in createProduct" })
  }
}

const updateProduct = async (req, res) => {
	const { id, title, description, price, discount } = req.body
	const token = req.headers.authorization.split(' ')[1]

  try {
		const isPermission = await authPermission(token)

		if (isPermission) {
			const product = await models.Product.findByIdAndUpdate({ _id: id }, {
				title, description, price, discount
			})

			if (product) {
				res.send({message: "Producto actualizado"})
			}
		} else {
			res.send({error: "Permiso denegado"})
		}

  } catch (error) {
    return res.send({ error: "Error in updateProduct" })
  }
}

// TODO: TESTEO DE ESTA FUNCION

const deleteProduct = async (req, res) => {
	const { id } = req.body
	const token = req.headers.authorization.split(' ')[1]

  try {
		const isPermission = await authPermission(token)

		if (isPermission) {
			const product = await models.Product.findByIdAndRemove({ _id: id })

			if (product) {
				res.send({message: "Producto eliminado"})
			}
		} else {
			res.send({error: "Permiso denegado"})
		} 
  } catch (error) {
    return res.send({ error: "Error in deleteProduct" })
  }
}

// TODO: TESTEO DE ESTA FUNCION

const findProducts = async (req, res) => {
  const { title } = req.body
	const token = req.headers.authorization.split(' ')[1]

  try {
		const isPermission = await authPermission(token)

		if (isPermission) {
			const products = await models.Product.find({ title: title })

			if (products) {
				res.json(products)
			} else {
				res.send({error: "No hay productos"})
			}
		} else {
			res.send({error: "Permiso denegado"})
		}

  } catch (error) {
    return res.send({ error: "Error in findProducts" })
  }
}

module.exports = {
  getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	findProducts
};
