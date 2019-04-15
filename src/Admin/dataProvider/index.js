import buildApolloClient, { buildQuery as buildQueryFactory } from 'ra-data-graphql-simple';
// import { DELETE, GET_LIST, GET_ONE } from 'ra-core';
import gql from 'graphql-tag';
import {
  CREATE,
  GET_LIST,
  GET_ONE
} from 'ra-core';
import  { _schema as schema } from './schema.graphql'
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

        case 'post':
            return 'Post';

        case 'invoices':
            return 'Invoice';

        default:
            throw new Error(`Unknown resource ${resource}`);
    }
};
const GET_POST_BY_ID = gql`
  query post($id: ID!){
    post(id: $id){
      title
    }
  }
`
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
        if(type === GET_LIST){
          return {
            query: gql`
              query {
                posts{
                  id
                  title
                  link
                  image_path
                  image_path_1
                  image_path_2
                  image_path_3
                  image_path_4
                  description
                  vincode
                  userId
                  price
                }
              }`,
               variables:  params, // params = { id: ... }
                parseResponse: response => {
                const data = [...response.data.posts]
                return { data: data, total: 12 }
                },

            }
          }
          if(type === GET_ONE){

            return {
              query: gql`
                query post($id: ID!){
                  post(id: $id){
                    id
                    title
                    link
                    image_path
                    image_path_1
                    image_path_2
                    image_path_3
                    image_path_4
                    description
                    vincode
                    price

                  }
                }`,
                variables: params,

                  parseResponse: response => {
                    console.log(response.data.post)
                  return { data: response.data.post }
                  },

              }
            }
          // if(type === CREATE){
          //   return {
          //     mutation: gql`
          //     mutation createPost(
          //       $title: String,
          //       $describtion: String,
          //       $link: String,
          //       $price: String,
          //       $image_path: String,
          //       $vincode: String,
          //       $userId: String
          //     ) {
          //       createPost(
          //         title: $title,
          //         describtion: $describtion,
          //         link: $link,
          //         price: $price,
          //         image_path: $image_path,
          //         vincode: $vincode,
          //         userId: $userId
          //       ) {
          //         id,
          //         title,
          //         describtion,
          //         link,
          //         price,
          //         image_path,
          //         vincode,
          //         userId
          //       }
          //     }`,
          //     options: (params) => ({
          //       variables: {
          //         title: params.title,
          //         describtion: params.describtion,
          //         link: params.link,
          //         price: params.price,
          //         image_path: params.image_path,
          //         vincode: params.vincode,
          //         userId: params.userId,

          //       },
          //     }),

          //     parseResponse: ({ data }) => {
          //       console.log(data)
          //       return data
          //       }
          //     }
          //   }

        return buildQuery(type, resource, params);
        }
    }

export default () => {

    return buildApolloClient({
        clientOptions: {
            uri: 'http://localhost:8080/graphql',
            headers: {
              authorization: localStorage.getItem('token'),
            },
          },
        introspection: { schema },
        buildQuery: customBuildQuery
    }).then(dataProvider => (type, resource, params) =>
          dataProvider(type, getGqlResource(resource), params)
    );
};
