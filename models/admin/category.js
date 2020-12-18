const mongoose = require('mongoose')
const Schema = mongoose.Schema

const category = new Schema({
    name: {
        type: String
    },
    imageCategory: {
        type : String
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'products'
    }]
})

const categoryModel = mongoose.model('category', category)
module.exports = categoryModel