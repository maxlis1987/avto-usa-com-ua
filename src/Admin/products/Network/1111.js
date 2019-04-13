import React from 'react';
import { Query } from 'react-admin';
import gql from "graphql-tag";

const query = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
    }
  }
`;

export default ({ record }) => {

  return (
    <Query query={query} resource="posts" payload={{ id: record.id }} >
        {({data, loading, error}) => {
          if(loading) return (<p>Loading</p>)
          if(error) return (<p>{error.message}</p>)
          console.log(data)
          return <div>{data.title}</div>
        }}
        </Query>

  )
}