import gql from 'graphql-tag';
import { GET_LIST, GET_ONE } from 'ra-core';

export default (type, resource, params, buildQuery) => {
	if (type === GET_LIST) {
		return {
			query: gql`
				query {
					posts {
						id
						title
						link
						image_path
						description
						vincode
						price
						drive
						fuelType
						engineVolume
						odometer
						typeBody
						transmission
					}
				}
			`,
			variables: params, // params = { id: ... }
			parseResponse: (response) => {
				const data = [ ...response.data.posts ];
				return { data: data, total: 12 };
			}
		};
	}
	if (type === GET_ONE) {
		return {
			query: gql`
				query post($id: ID!) {
					post(id: $id) {
						id
						title
						link
						image_path
						description
						vincode
						price
						drive
						fuelType
						engineVolume
						odometer
						typeBody
						transmission
						userId
					}
				}
			`,
			variables: params,

			parseResponse: (response) => {
				return { data: response.data.post };
			}
		};
	}

	return buildQuery(type, resource, params);
};
