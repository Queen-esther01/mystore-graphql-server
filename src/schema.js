const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        allProducts: [Products!]!
        product(id: ID!): Products
        productsByCategory(category: String!): [Products!]!
    }
    type Products {
        id: ID!,
        title: String!,
        price: Float!,
        description: String!,
        category: String!,
        image: String!,
        rating: Rating!
        quantity: Int!
    }

    type Rating {
        rate: Float!,
        count: Int!
    }
`

module.exports = typeDefs;