const products = require('../../models/admin/products')
const category = require('../../models/admin/category')
const c = require('config')

const newProducts = async (req, res, next) => {
    const categoryId = req.body.category
    const findCategory = await category.findById(categoryId)

    const newProducts = req.body
    delete newProducts.category

    newProducts.category = categoryId
    const addNewProducts = new products(newProducts)

    await addNewProducts.save()

    findCategory.products.push(addNewProducts._id)
    await findCategory.save()

    return res.status(201).json({ data : addNewProducts })
}

const getProducts = async (req, res, next) => {
    const getProducts = await products.find().lean()
    res.status(200).json({ data : getProducts })
}

const getProductsById = async (req, res, next) => {
    const { id } = req.params
    const getProductsById = await products.findById(id)
    res.status(200).json({ data : getProductsById })
}

const editProducts = async (req, res, next) => {
    const { id } = req.params
    const editProductById = req.body
    const editProducts = await products.findByIdAndUpdate(id, editProductById)
    return res.status(200).json({ success : true })
}

const deleteProducts = async (req, res, next) => {
    const { id } = req.params
    const findProducts = await products.findById(id)

    const categoryId = findProducts.category
    const findIdProductsCategory = await category.findById(categoryId)

    await findProducts.remove()
    findIdProductsCategory.products.pull(findProducts)
    await findIdProductsCategory.save()

    return res.status(200).json({ success : true })
}

module.exports = {
    newProducts,
    getProducts,
    getProductsById,
    editProducts,
    deleteProducts
}