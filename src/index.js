import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Admin/App';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
	// uri: 'http://195.191.24.168:4000/graphql'
});
ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
// img.replace(/^data:image\/(png|jpg);base64,/, "")
