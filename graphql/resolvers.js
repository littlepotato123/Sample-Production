const { find, add } = require('../models/dbHelper');

const resolvers = {
    Query: {
        hello: () => {
            return "Hi"
        },
        all: async () => {
            return await find();
        }
    },
    Mutation: {
        create: async (_, { lesson }) => {
            return await add(lesson);
        }
    }
};

module.exports = resolvers;