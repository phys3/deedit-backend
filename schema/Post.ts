import { gql } from 'apollo-server'

import { 
  getPostById,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../db/data/Post'

import { 
  getUserById
} from '../db/data/User'

import {
  getCommentsByPostId
} from '../db/data/Comment'

import {
  getTagsByPostId
} from '../db/data/Tag'

export const typeDef = gql`
  extend type Query {
    post(id: String!): Post
    posts: [Post]
  }

  extend type Mutation {
    createPost(title: String!, content: String!, userId: String!): Boolean!
    updatePost(title: String!, content: String!, id: String!): Boolean!
    deletePost(id: String!): Boolean!
  }

  type Post {
    id: Int!
    title: String!
    content: String!
    userId: String!
    user: User
    comment: [Comment]
    tag: [Tag]
  }
`;

export const resolvers = {
  Query: {
    post: async (_: any, args: any) => {
      const { id } = args;

      return getPostById(id);
    },
    posts: async (_: any) => {
      return getPosts();
    }
  },
  Mutation: {
    createPost: async (_: any, args: any) => {
      const { title, content, userId } = args;
      try {
        await createPost({ title, content, userId });
        return true;
      } catch (error) {
        return false;
      }
    },
    updatePost: async (_: any, args: any) => {
      const { title, content, id } = args;
      try {
        await updatePost({ title, content, id });
        return true;
      } catch (error) {
        return false;
      }
    },
    deletePost: async (_: any, args: any) => {
      const { id } = args;
      try {
        await deletePost(id);
        return true;
      } catch (error) {
        return false;
      }
    }
  },
  Post: {
    user: async (_: any) => {
      const { userId } = _;

      return getUserById(userId);
    },
    comment: async (_: any) => {
      const { id } = _;

      return getCommentsByPostId(id);
    },
    tag: async (_: any) => {
      const { postId } = _;

      return getTagsByPostId(postId);
    },
  }
};
