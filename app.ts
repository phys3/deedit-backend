import { ApolloServer } from 'apollo-server'
import schema from './schema'

import dbConnect from './db/db-connect';

dbConnect()
const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
