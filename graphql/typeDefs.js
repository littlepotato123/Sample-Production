const { gql } = require('apollo-server');

const typeDefs = gql`
    type Lesson {
        id: ID!
        name: String!
    }

    type Query {
        hello: String!
        all: [Lesson!]!
    }

    input LessonInput {
        name: String!
    }

    type Mutation {
        create(lesson: LessonInput!): Int!
    }
`;

module.exports = typeDefs;