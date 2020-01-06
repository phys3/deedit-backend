import { makeExecutableSchema, gql } from 'apollo-server'
import { merge } from 'lodash';

import { 
  typeDef as User,
  resolvers as userResolvers,
} from './User';

import { 
  typeDef as UserRole,
  resolvers as userRoleResolvers,
} from './UserRole';

import { 
  typeDef as Post,
  resolvers as postResolvers,
} from './Post';

import { 
  typeDef as Comment,
  resolvers as commentResolvers,
} from './Comment';

import { 
  typeDef as Tag,
  resolvers as tagResolvers,
} from './Tag';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [ 
    Query,
    Mutation,
    UserRole,
    User,
    Post,
    Comment,
    Tag,
  ],
  resolvers: merge(
    resolvers,
    userRoleResolvers,
    userResolvers,
    postResolvers,
    commentResolvers,
    tagResolvers,
  ),
});