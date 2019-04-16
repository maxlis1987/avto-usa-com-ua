import React from 'react';
import {
    Datagrid,
    DateField,
    Edit,
    EditButton,
    ShowButton,
    FormTab,
    NumberInput,
    Pagination,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    SaveButton,
    TextField,
    TextInput,
    CardActions,
    ImageField,
    ArrayField,
    SimpleForm,
    DeleteButton,
    Toolbar
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import Poster from './Poster';
import { styles as createStyles } from './Create';

const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;

const PostShowActions = ({ basePath, data, resource }) => {
  const isLogin = window.sessionStorage.getItem('admin');

return (
  <Toolbar>
      <DeleteButton basePath={basePath} record={data} style={createStyles.delete}/>
      <SaveButton basePath={basePath} record={data} style={createStyles.delete}/>
  </Toolbar>
);
}
const styles = {
    ...createStyles,
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const ProductEdit = ({ classes, ...props }) => {

return (
    <Edit {...props}  title={<ProductTitle />}>
      <SimpleForm toolbar={<PostShowActions />} >

      <ImageField source="image_path"/>
      <ImageField source="image_path_1"/>
      <ImageField  source="image_path_2"/>
      <ImageField source="image_path_3"/>
      <ImageField  source="image_path_4"/>
      <TextField source="title"/>

      <TextField  source="price"/>
      <TextField  source="vincode"/>
      <TextField  source="description"/>
</SimpleForm>


    </Edit>
);
}
export default withStyles(styles)(ProductEdit);
