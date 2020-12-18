const { date } = require('faker')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bill = new Schema({
    name : {
        type: String
    },
    address : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    note : {
        type : String
    },
    time : {
        type : Date,
        default : Date.now()
    },
    quantity : {
        type : Number
    },
    productsBuy : [{
        type: Schema.Types.ObjectId,
        ref: 'products'
    }]
})

const billModel = mongoose.model('bill', bill)
module.exports = billModel