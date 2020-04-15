import { gql } from 'apollo-server'

import { 
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from '../db/data/Comment'

import { 
  getPostById,
} from '../db/data/Post'

import { 
  getUserById
} from '../db/data/User'

export const typeDef = gql`
  extend type Query {
    comment(id: String!): Comment
  }

  extend type Mutation {
    createComment(postId: String!, userId: String!, content: String!): Comment!
    updateComment(id: String!, content: String!): Boolean!
    deleteComment(id: String!): Boolean!
  }

  type Comment {
    id: String!
    content: String!
    userId: String!
    postId: String!
    post: Post
    user: User
  }
`;

export const resolvers = {
  Query: {
    comment: async (_: any, args: any) => {
      const { id } = args;

      return getCommentById(id);
    },
  },
  Mutation: {
    createComment: async (_: any, args: any) => {
      const { postId, userId, content } = args;
      try {
        return createComment({ postId, userId, content });
      } catch (error) {
        return error;
      }
    },
    updateComment: async (_: any, args: any) => {
      const { id, content } = args;
      try {
        await updateComment({ id, content });
        return true;
      } catch (error) {
        return error;
      }
    },
    deleteComment: async (_: any, args: any) => {
      const { id } = args;
      try {
        await deleteComment(id);
        return true;
      } catch (error) {
        return error;
      }
    }
  },
  Comment: {
    user: async (_: any) => {
      const { userId } = _;

      return getUserById(userId);
    },
    post: async (_: any) => {
      const { postId } = _;

      return getPostById(postId);
    },
  }
};
