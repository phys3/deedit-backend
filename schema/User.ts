import { gql } from 'apollo-server'

import { 
  getUserByUsername,
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../db/data/User'

import { 
  getUserRoleById
} from '../db/data/UserRole'

import { 
  getPostsByUserId
} from '../db/data/Post'

export const typeDef = gql`
  extend type Query {
    user(username: String!): User
    users: [User]
  }

  extend type Mutation {
    addUser(username: String!, email: String!, passwordHash: String!, firstName: String, lastName: String, userRoleId: String!): User!
    updateUser(id: String!, username: String, email: String, passwordHash: String, firstName: String, lastName: String): User!
    deleteUser(id: String!): Boolean!
  }

  type User {
    id: String!
    username: String
    email: String
    passwordHash: String
    firstName: String
    lastName: String
    settings: String
    isBlocked: Boolean
    createdAt: String
    updatedAt: String
    userRoleId: String
    userRole: UserRole
    posts: [Post]
  }
`;

export const resolvers = {
  Query: {
    user: async (_: any, args: any) => {
      const { username } = args;

      return getUserByUsername(username);
    },
    users: async (_: any) => {
      return getUsers();
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const { username, firstName, lastName, email, passwordHash, userRoleId } = args;
      try {
        return createUser({
          username,
          firstName,
          lastName,
          email,
          passwordHash,
          userRoleId
        });
      } catch (error) {
        return error
      }
    },
    updateUser: async (_: any, args: any) => {
      const { id, username, firstName, lastName, email, passwordHash } = args;
      try {
        await updateUser({
          id,
          username,
          firstName,
          lastName,
          email,
          passwordHash,
        });
        return getUserById(id);
      } catch (error) {
        return error;
      }
    },
    deleteUser: async (_: any, args: any) => {
      const { id } = args;
      try {
        await deleteUser(id);
        return true;
      } catch (error) {
        return error;
      }
    }
  },
  User: {
    userRole: async (_: any) => {
      const { userRoleId } = _;

      return getUserRoleById(userRoleId);
    },
    posts: async (_: any) => {
      const { id } = _;

      return getPostsByUserId(id);
    },
  }
};
