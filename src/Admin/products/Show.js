import React from 'react';
import { Edit, SaveButton, TextField, ImageField, SimpleForm, DeleteButton, Toolbar } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import { styles as createStyles } from './Create';

const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;

const PostShowActions = ({ basePath, data, resource }) => {
	const isLogin = window.sessionStorage.getItem('admin');

	return (
		<Toolbar>
			<DeleteButton basePath={basePath} record={data} style={createStyles.delete} />
			<SaveButton basePath={basePath} record={data} style={createStyles.delete} />
		</Toolbar>
	);
};
const styles = {
	...createStyles,
	comment: {
		maxWidth: '20em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	}
};

const ProductEdit = ({ classes, ...props }) => {
	return (
		<Edit {...props} title={<ProductTitle />}>
			<SimpleForm toolbar={<PostShowActions />}>
				<ImageField source="image_path" />

				<TextField source="title" />

				<TextField source="price" />
				<TextField source="vincode" />
				<TextField source="description" />
			</SimpleForm>
		</Edit>
	);
};
export default withStyles(styles)(ProductEdit);
