import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { MONGO_URI, PORT } from './config/keys';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err));


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(PORT).then(({url}) => console.log(`🚀  Server ready at ${url}`));

export default server;
