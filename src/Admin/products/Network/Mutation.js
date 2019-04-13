import React from 'react';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";

const ADD_IMAGE = gql`
  mutation createPost($image_path: String) {
    createPost(image_path: $image_path) {
      image_path
    }
  }
`;

export default () => {
  let input;
  return (

    <Mutation mutation={ADD_IMAGE}>
          {(createPost, { data }) => (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  createPost({ variables: { image_path: input.value } });
                  input.value = "";
                }}
              >
              <input
                style={{border: '1px solid red'}}
                ref={node => {
                  input = node;
                }}
              />
                <button type="submit">Add Todo</button>
              </form>
            </div>
          )}
        </Mutation>

  )
}