const getProduct = (_, res) => {
  try {
    res.send('IT WORKS')
  } catch (error) {
    return res.send({ error: "" })
  }
}

module.exports = {
  getProduct,
};
