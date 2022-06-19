const { RESTDataSource } = require('apollo-datasource-rest');

class StoreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://fakestoreapi.com';
    }

    getAllProducts() {
        return this.get('/products');
    }

    getSingleProduct(id) {
        return this.get(`/products/${id}`);
    }

    getProductsByCategory(category) {
        return this.get(`/products/category/${category}`);
    }
}

module.exports = StoreAPI;