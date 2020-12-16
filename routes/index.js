var express = require('express');
var router = express.Router();
var adminControllersCategory = require('../controllers/admin/category')
var adminControllersProducts = require('../controllers/admin/products')
var customerController = require('../controllers/customer/customer')

/* GET home page. */
router.route('/api/admin/addCategory')
    .get(adminControllersCategory.getCategory)
    .post(adminControllersCategory.newCategory)

router.route('/api/admin/Category/:id')
    .get(adminControllersCategory.getCategoryById)
    .put(adminControllersCategory.editCategory)
    .delete(adminControllersCategory.deleteCategory)

router.route('/api/add/addProducts')
    .get(adminControllersProducts.getProducts)
    .post(adminControllersProducts.newProducts)

router.route('/api/add/Products/:id')
    .get(adminControllersProducts.getProductsById)
    .put(adminControllersProducts.editProducts)
    .delete(adminControllersProducts.deleteProducts)

router.route('/api/checkout')
    .get(customerController.getProductsOder)
    .post(customerController.postProductsOder)

router.route('/api/checkout/:id')
    .delete(customerController.deleleProductsOder)

module.exports = router;
