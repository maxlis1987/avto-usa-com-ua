import buildApolloClient, { buildQuery as buildQueryFactory } from 'ra-data-graphql-simple';
import gql from 'graphql-tag';

import { _schema as schema } from './schema.graphql';
import queries from './queries';

const getGqlResource = (resource) => {
	switch (resource) {
		case 'posts':
			return 'posts';
		// case 'customers':
		//     return 'Customer';

		// case 'categories':
		//     return 'Category';

		// case 'commands':
		//     return 'Command';

		// case 'products':
		//     return 'Product';

		case 'post':
			return 'Post';

		// case 'invoices':
		//     return 'Invoice';

		default:
			throw new Error(`Unknown resource ${resource}`);
	}
};

const customBuildQuery = (introspectionResults) => {
	const buildQuery = buildQueryFactory(introspectionResults);

	return (type, resource, params) => {
		return queries(type, resource, params, buildQuery);
	};
};

export default () => {
	return buildApolloClient({
		clientOptions: {
			uri: 'http://localhost:4000/graphql'
		},
		introspection: { schema },
		buildQuery: customBuildQuery
	}).then((dataProvider) => (type, resource, params) => dataProvider(type, getGqlResource(resource), params));
};
