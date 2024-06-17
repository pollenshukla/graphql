

import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import schema from './data/schema'

const PORT = 8085;

const app = express();

app.get('/', (req, res) => {
   res.send('GraphQL is amazing');
});

// Define the responses from the GraphQL server.
// This is a resolver/functions that resolves the request and sends response back to the client.
const root = { hello: () => "Hi, I'm Pollen!" };

// GraphQL server
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`));