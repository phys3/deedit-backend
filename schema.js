'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');
const addUser = require('./resolvers/create');
const viewUser = require('./resolvers/view');
const listUsers = require('./resolvers/list');
const removeUser = require('./resolvers/remove');

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        addedAt: { type: new GraphQLNonNull(GraphQLString) },
    }
});


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            listUsers: {
                type: new GraphQLList(userType),
                resolve: (parent, args) => listUsers()
            },
            viewUser: {
                args: {
                    id: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: userType,
                resolve: (parent, args) => viewUser(args.id)
            }
        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            createUser: {
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: userType,
                resolve: (parent, args) => addUser(args)
            },
            removeUser: {
                args: {
                    id: { type: new GraphQLNonNull(GraphQLString) }
                },
                type: GraphQLString,
                resolve: (parent, args) => removeUser(args.id)
            },
        }
    })
});

module.exports = schema;