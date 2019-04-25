import React from 'react';
import { Edit, SaveButton, TextField, ImageField, SimpleForm, DeleteButton, Toolbar } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles as createStyles } from './Create';
import SliderImages from './SliderImages';
const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;
const PostShowActions = (props) => {
	const isLogin = window.sessionStorage.getItem('admin');
	return (
		<Toolbar>
			<DeleteButton basePath={props.basePath} record={props.record} style={createStyles.delete} />
			<SaveButton basePath={props.basePath} record={props.record} style={createStyles.delete} />
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
	},
	main: {
		display: 'block',
		textAlign: 'left'
	},
	titleLabel: {
		fontSize: '1.1em'
	},
	priceLabel: {
		fontSize: '1.4em',
		color: 'tomato'
	},
	imageBlock: {
		width: '88vw'
	}
};

const ProductEdit = ({ classes, ...props }) => {
	return (
		<Edit {...props} title={<ProductTitle />}>
			<SimpleForm toolbar={<PostShowActions />} className={classes.main}>
				<TextField addLabel={false} source="title" className={classes.titleLabel} />

				<TextField addLabel={false} source="price" className={classes.priceLabel} />
				<SliderImages source="image_path" className={classes.imageBlock} />
				<TextField addLabel={false} source="description" />
			</SimpleForm>
		</Edit>
	);
};
export default withStyles(styles)(ProductEdit);
