import buildApolloClient, { buildQuery as buildQueryFactory } from 'ra-data-graphql-simple';
// import { DELETE, GET_LIST } from 'ra-core';
import gql from 'graphql-tag';
import  {_schema as schema} from './schema.graphql'
const getGqlResource = resource => {
    switch (resource) {
      case 'posts':
        return 'posts';
        case 'customers':
            return 'Customer';

        case 'categories':
            return 'Category';

        case 'commands':
            return 'Command';

        case 'products':
            return 'Product';

        case 'reviews':
            return 'Review';

        case 'invoices':
            return 'Invoice';

        default:
            throw new Error(`Unknown resource ${resource}`);
    }
};

const customBuildQuery = introspectionResults => {

    const buildQuery = buildQueryFactory(introspectionResults);

    return (type, resource, params) => {

        // console.log(type, resource, params)
        // if (type === DELETE) {
        //     return {
        //         query: gql`mutation remove${resource}($id: ID!) {
        //             remove${resource}(id: $id)
        //         }`,
        //         variables: { id: params.id },
        //         parseResponse: ({ data }) => {
        //             if (data[`remove${resource}`]) {
        //                 return { data: { id: params.id } };
        //             }

        //             throw new Error(`Could not delete ${resource}`);
        //         }
        //     }
        // }
        if(type === 'GET_LIST'){

          return {
            query: gql`
              query {
                posts{
                  id
                  title
                  link
                  image_path
                  describtion
                  vincode
                  userId
                }
              }`,
               variables:  params, // params = { id: ... }
                parseResponse: response => {
                const data = [...response.data.posts]
                return { data: data, total: 12 }
                },

            }
          }
          if(type === 'CREATE'){
            return {
              mutation: gql`
                mutation createPost(
                  $id: ID!
                  $title: String,
                  $describtion: String,
                  $link: String,
                  $price: Int!,
                  $image_path: String,
                  $vincode: String
                  ) {
                  createPost(
                    id: $id
                    title: $title
                    describtion: $describtion
                    link: $link
                    price: $price
                    image_path: $image_path
                    vincode: $vincode
                    )
                  }`,
                  variables: {
                    id: params.id,
                    title: params.title,
                    describtion: params.describtion,
                    link: params.link,
                    price: params.price,
                    image_path: params.image_path,
                    vincode: params.vincode,
                  }
              }
            }
        return buildQuery(type, resource, params);
        }
    }

export default () => {

    return buildApolloClient({
        clientOptions: {
            uri: 'http://localhost:4000/graphql',
            headers: {
              authorization: `Bearer ${
                process.env.REACT_APP_DATA_PROVIDER
              }`,
            },
        },
        introspection: { schema },
        buildQuery: customBuildQuery
    }).then(dataProvider => (type, resource, params) =>
          dataProvider(type, getGqlResource(resource), params)
    );
};
