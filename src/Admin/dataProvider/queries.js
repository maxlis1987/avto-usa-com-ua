import gql from 'graphql-tag';
import { GET_LIST, GET_ONE } from 'ra-core';

export default (type, resource, params, buildQuery) => {
	if (type === GET_LIST) {
		return {
			query: gql`
				query {
					cars {
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
						arriveDate
					}
				}
			`,
			variables: params, // params = { id: ... }
			parseResponse: (response) => {
				const data = [ ...response.data.cars ];
				return { data: data, total: 12 };
			}
		};
	}
	if (type === GET_ONE) {
		return {
			query: gql`
				query car($id: ID!) {
					car(id: $id) {
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
						arriveDate
						userId
					}
				}
			`,
			variables: params,

			parseResponse: (response) => {
				return { data: response.data.car };
			}
		};
	}

	return buildQuery(type, resource, params);
};
