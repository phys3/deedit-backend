import { gql } from 'apollo-server'
import { getUserRoles, getUserRoleById } from '../db/data/UserRole'

export const typeDef = gql`
  extend type Query {
    userRole(id: String!): UserRole
    userRoles: [UserRole]
  }

  type UserRole {
    id: String!
    name: String
  }
`;

export const resolvers = {
  Query: {
    userRole: async (_: any, args: any) => {
      const { id } = args;

      return getUserRoleById(id);
    },
    userRoles: async (_: any) => {
      return getUserRoles();
    }
  },
};

