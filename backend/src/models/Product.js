const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
		description: {
			type: String
		},
		price: {
			type: Number,
			require: true,
		},
		discount: {
			type: Number
		},
  },
  { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

module.exports = {
	Product
}
