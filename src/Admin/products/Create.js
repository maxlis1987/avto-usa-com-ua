import React from 'react';
import {
    Create,
    FormTab,
    SaveButton,
    TabbedForm,
    TextInput,
    required,
    Toolbar,
    FlatButton,

} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import RichTextInput from 'ra-input-rich-text';
import useFormInput from './Network/onChange';
import { Mutation } from 'react-apollo'
import gql from "graphql-tag";
export const styles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    width: { width: '5em' },
    widthFormGroup: { display: 'inline-block' },
    height: { width: '5em' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
    delete: {display: 'none'}
};

const ADD_IMAGE = gql`
  mutation createPost(
      $title: String,
      $description: String,
      $link: String,
      $price: String,
      $image_path: String,
      $image_path_1: String,
      $image_path_2: String,
      $image_path_3: String,
      $image_path_4: String,
      $vincode: String,
      $userId: String
      ) {
      createPost(
      title: $title,
      description: $description,
      link: $link,
      price: $price,
      image_path: $image_path,
      image_path_1: $image_path_1,
      image_path_2: $image_path_2,
      image_path_3: $image_path_3,
      image_path_4: $image_path_4,
      vincode: $vincode,
      userId: $userId
      ) {
      title,
      description,
      link,
      price,
      image_path,
      image_path_1,
      image_path_2,
      image_path_3,
      image_path_4,
      vincode,
      userId
    }
}`;

const ApproveButton = ({
  title,
  image_path,
  image_path_1,
  image_path_2,
  image_path_3,
  image_path_4, price, vincode, link, userId, description }) => {

  return (
      <Mutation
          type="CREATE"
          resource="products"
          mutation={ADD_IMAGE}
      >
          {(createPost, { data }) => (
            <SaveButton label="Save" onClick={e => {
              createPost({
                variables: {
                  title,
                  image_path,
                  image_path_1,
                  image_path_2,
                  image_path_3,
                  image_path_4,
                  price,
                  vincode,
                  link,
                  userId,
                  description
                }
            })

            return data
          }} />
          )}
      </Mutation>
  );
}

const ProductCreate = ({ classes, ...props }) => {
  const title = useFormInput('');
  const image_path = useFormInput('');
  const image_path_1 = useFormInput('');
  const image_path_2 = useFormInput('');
  const image_path_3 = useFormInput('');
  const image_path_4 = useFormInput('');
  const price = useFormInput('');
  const vincode = useFormInput('');
  const link = useFormInput('');
  const userId = useFormInput('');
  const description = useFormInput('');

  const payload = {
    image_path: image_path.value,
    image_path_1: image_path_1.value,
    image_path_2: image_path_2.value,
    image_path_3: image_path_3.value,
    image_path_4: image_path_4.value,
    title: title.value,
    price: price.value,
    vincode: vincode.value,
    link: link.value,
    userId: userId.value,
    description: description.value
  }


return (
    <Create {...props}>

        <TabbedForm toolbar={<ApproveButton {...payload} />}>

            <FormTab label="resources.products.tabs.image">
                <TextInput
                    autoFocus
                    {...image_path}
                    source="image_path"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    autoFocus
                    {...image_path_1}
                    source="image_path_1"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    autoFocus
                    {...image_path_2}
                    source="image_path_2"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    autoFocus
                    {...image_path_3}
                    source="image_path_3"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    autoFocus
                    {...image_path_4}
                    source="image_path_4"
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
            </FormTab>
                <FormTab
                    label="resources.products.tabs.description"
                    path="description"
                >
                <textarea rows={15} cols={15}  {...description} source="description" addLabel={true} />
            </FormTab>
        </TabbedForm>

    </Create>
);
}
export default withStyles(styles)(ProductCreate);
