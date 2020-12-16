const category = require('../../models/admin/category')
const { get } = require('../../routes')

const newCategory = async (req, res, next) => {
    const newCategory = req.body
    const addCategory = new category(newCategory)
    await addCategory.save()
    res.status(201).json({ success : true })
}

const getCategory = async (req, res, next) => {
    const getCategory = await category.find().lean()
    res.status(200).json({ data : getCategory })
}

const getCategoryById = async (req, res, next) => {
    const { id } = req.params
    const getCategoryById = await category.findById(id)
    res.status(200).json({ data : getCategoryById })
}

const deleteCategory = async (req, res, next) => {
    const { id } = req.params
    const deleteCategory = await category.findByIdAndDelete(id)
    res.status(200).json({ success : true })
}

const editCategory = async (req, res, next) => {
    const { id } = req.params
    const editCategoryById = req.body
    const editCategory = await category.findByIdAndUpdate(id, editCategoryById)
    res.status(201).json({ success : true })
}

module.exports = {
    newCategory,
    getCategory,
    deleteCategory,
    editCategory,
    getCategoryById
}