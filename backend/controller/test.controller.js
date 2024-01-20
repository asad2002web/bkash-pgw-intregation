const ProductTestModel = require("../model/test.model");

const testController = (req, res) => {
  try {
    res.send({
      message: "Testing router",
    });
  } catch (error) {
    clg({
      error: error.message,
    });
  }
};

const testSendProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new ProductTestModel(product);
    await newProduct.save();
    res.send({ message: "Product saved" });
  } catch (error) {
    clg({
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await ProductTestModel.find();
    res.send(products);
  } catch (error) {
    clg({
      error: error.message,
    });
  }
};

const getSingleProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductTestModel.findOne({ _id: id });
    res.send(product);
  } catch (error) {
    clg({
      error: error.message,
    });
  }
};

module.exports = {
  testController,
  testSendProduct,
  getProducts,
  getSingleProducts,
};
