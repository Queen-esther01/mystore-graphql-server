const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const StoreAPI = require('./datasources/store-api');

// const mocks = {
//     Query: () => ({
//         allProducts: () => [...new Array(20)]
//     }),
//     Products: () => ({
//         id: '1',
//         title: 'Cotton Jacket',
//         price: 100,
//         image: 'https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg'
//     })
// }

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({ 
        typeDefs,
        resolvers,
        dataSources: () => {
            return {
                storeAPI: new StoreAPI()
            }
        }
    })

    const { url, port } = await server.listen({ port: process.env.PORT || 4000}).then(() => {
        console.log(`
            🚀  Server is running!
            🔉  Listening on port ${port}
            📭  Query at ${url}
        `);
    })
}

startApolloServer(typeDefs, resolvers);



