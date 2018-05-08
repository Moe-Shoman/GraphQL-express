const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://Muhammad:9015085a@ds117250.mlab.com:17250/gql-express');
mongoose.connection.once('open', () => console.log('connected to database'))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => console.log(`listening on port 4000`));
