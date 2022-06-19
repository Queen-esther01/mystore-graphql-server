const resolvers = {
    Query: {
        allProducts: (_, __, { dataSources }) => {
            return dataSources.storeAPI.getAllProducts()
        },
        product: (_, { id }, { dataSources }) => {
            return dataSources.storeAPI.getSingleProduct(id)
        },
        productsByCategory: (_, { category }, { dataSources }) => {
            console.log(category)
            if(category === 'all'){
                return dataSources.storeAPI.getAllProducts()
            }
            return dataSources.storeAPI.getProductsByCategory(category)
        }
    },
    // Products: {
    //     quantity: () => 0
    // }
}

module.exports = resolvers;