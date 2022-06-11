// import gql tagged tempmlate function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

// export typeDefs
module.exports = typeDefs;