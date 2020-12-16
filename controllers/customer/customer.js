const bill = require('../../models/customer/bill')

const getProductsOder = async (req, res, next) => {
    const getAllProducts = await bill.find().lean()
    return res.status(200).json({ data : getAllProducts })
}

const postProductsOder = async (req, res, next) => {
    const newBill = req.body
    const newBillAdd = new bill(newBill)
    newBillAdd.save()
    return res.status(201).json({ success : true })
}

const deleleProductsOder = async (req, res, next) => {
    const { id } = req.params
    const deleteProductsOder = await bill.findByIdAndDelete(id)
    return res.status(200).json({ success : true })
}

module.exports = {
    getProductsOder,
    postProductsOder,
    deleleProductsOder
}