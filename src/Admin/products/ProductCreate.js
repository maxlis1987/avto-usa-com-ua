import React from 'react';
import {
    Create,
    FormTab,
    SaveButton,
    TabbedForm,
    TextInput,
    required,
    Toolbar
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import RichTextInput from 'ra-input-rich-text';
import useFormInput from './Network/onChange';
import { Mutation } from 'react-apollo';
import gql from "graphql-tag";
export const styles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    width: { width: '5em' },
    widthFormGroup: { display: 'inline-block' },
    height: { width: '5em' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const ADD_IMAGE = gql`
  mutation createPost(
      $title: String,
      $describtion: String,
      $link: String,
      $price: String,
      $image_path: String,
      $vincode: String,
      $userId: String
      ) {
      createPost(
      title: $title,
      describtion: $describtion,
      link: $link,
      price: $price,
      image_path: $image_path,
      vincode: $vincode,
      userId: $userId
      ) {
      id,
      title,
      describtion,
      link,
      price,
      image_path,
      vincode,
      userId
    }
}`;



const ProductCreate = ({ classes, ...props }) => {
  const title = useFormInput('');
  const image_path = useFormInput('');
  const price = useFormInput('');
  const vincode = useFormInput('');
  const link = useFormInput('');
  const userId = useFormInput('');
  const description = useFormInput('');



return (
    <Create {...props}>
    <Mutation mutation={ADD_IMAGE}>
    {(createPost, { data }) => (
        <TabbedForm toolbar={<button onClick={e => {
          createPost({
            variables: {
              image_path: image_path.value,
              title: title.value,
              price: price.value,
              vincode: vincode.value,
              link: link.value,
              userId: userId.value,
              description: description.value
            }
          });
        }} >Save</button>}>

            <FormTab label="resources.products.tabs.image">
                <TextInput
                    autoFocus
                    {...image_path}
                    source="image_path"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    {...title}
                    source="title"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
            </FormTab>
            <FormTab label="resources.products.tabs.details">

                <TextInput
                    {...price}
                    source="price"
                    validate={required()}
                    className={classes.price}
                />
                <TextInput
                    {...vincode}
                    source="vincode"
                    validate={required()}
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                />
                <TextInput
                    {...link}
                    source="link"
                    validate={required()}
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                />
                <TextInput
                {...userId}
                    source="userId"
                    validate={required()}
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                />
              {/*   <ReferenceInput
                    source="userId"
                    reference="posts"
                    allowEmpty
                >
                    <SelectInput source="name" />
                </ReferenceInput>
                <TextInput
                    source="createdAt"
                    validate={required()}
                    className={classes.stock}
                /> */}
            </FormTab>
            <FormTab
                label="resources.products.tabs.description"
                path="description"
            >
                <TextInput  {...description} source="description" addLabel={false} />
            </FormTab>
        </TabbedForm>
      )}
        </Mutation>
    </Create>
);
}
export default withStyles(styles)(ProductCreate);
