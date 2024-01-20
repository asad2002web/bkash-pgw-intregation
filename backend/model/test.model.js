const mongoose =require('mongoose');

const productTest = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const ProductTestModel = mongoose.model('product', productTest);
module.exports = ProductTestModel;