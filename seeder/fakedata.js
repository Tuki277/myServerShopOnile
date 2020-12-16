const seeder = require('mongoose-seed');
const faker = require('faker');

let items = [];
for (i = 0; i < 5; i++) {
    items.push(
        {
            name: faker.commerce.productName()
        }
    )
}

let data = [{
    'model': 'category',
    'documents': items
}]

// connect mongodb
seeder.connect('mongodb+srv://shopOnline:1234@cluster0.okyel.mongodb.net/<dbname>?retryWrites=true&w=majority', function () {
    seeder.loadModels([
        '../models/admin/category.js'  // load mongoose model 
    ]);
    seeder.clearModels(['category'], function () {
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});