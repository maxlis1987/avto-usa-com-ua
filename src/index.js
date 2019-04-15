import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Admin/App';
import './index.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});
ReactDOM.render(
 <ApolloProvider client={client}>
<App />
</ApolloProvider>
, document.getElementById('root'));
