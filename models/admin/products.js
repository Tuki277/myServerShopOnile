const mongoose = require('mongoose')
const Schema = mongoose.Schema

const products = new Schema({
    name: {
        type: String
    },
    price : {
        type : Number
    },
    size : {
        type : String
    },
    detail : {
        type : String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    }
})

const productsModels = mongoose.model('products', products)
module.exports = productsModels