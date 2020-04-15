import { gql } from 'apollo-server'

import {
  getTagById,
  getTags,
  createTag,
  deleteTag
} from '../db/data/Tag'

import { 
  getPostById,
} from '../db/data/Post'

export const typeDef = gql`
  extend type Query {
    tag(id: String!): Tag
    tags: [Tag]
  }

  extend type Mutation {
    createTag(name: String!, postId: String!): Tag!
    deleteTag(id: String!): Boolean!
  }

  type Tag {
    id: String!
    name: String!
    postId: String!
    post: Post
  }
`;

export const resolvers = {
  Query: {
    tag: async (_: any, args: any) => {
      const { id } = args;

      return getTagById(id);
    },
    tags: async (_: any) => {
      return getTags();
    }
  },
  Mutation: {
    createTag: async (_: any, args: any) => {
      const { name, postId } = args;
      try {
        return createTag({ name, postId });
      } catch (error) {
        return error;
      }
    },
    deleteTag: async (_: any, args: any) => {
      const { id } = args;
      try {
        await deleteTag(id);
        return true;
      } catch (error) {
        return error;
      }
    }
  },
  Tag: {
    post: async (_: any) => {
      const { postId } = _;

      return getPostById(postId);
    }
  }
};
