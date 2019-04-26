import React from 'react';
import { Edit, ShowButton, FormTab, TabbedForm, TextInput, CardActions } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import RichTextInput from 'ra-input-rich-text';

import Poster from './Poster';
import { styles as createStyles } from './Create';

const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;

const PostShowActions = ({ basePath, data, resource }) => (
	<CardActions>
		<ShowButton basePath={basePath} record={data} />
	</CardActions>
);

const styles = {
	...createStyles,
	comment: {
		maxWidth: '20em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	}
};

const ProductEdit = ({ classes, ...props }) => (
	<Edit {...props} title={<ProductTitle />}>
		<TabbedForm>
			<FormTab label="resources.products.tabs.image">
				<Poster />
				<TextInput source="image_path" options={{ fullWidth: true }} />
			</FormTab>
			<FormTab label="resources.products.tabs.details" path="details">
				<TextInput source="price" className={classes.price} />
				<TextInput source="price" className={classes.width} formClassName={classes.widthFormGroup} />
				<TextInput source="vincode" className={classes.height} formClassName={classes.heightFormGroup} />
			</FormTab>
			<FormTab label="resources.products.tabs.description" path="description">
				<RichTextInput source="description" addLabel={false} />
			</FormTab>
			<FormTab label="resources.products.tabs.reviews" path="post" />
		</TabbedForm>
	</Edit>
);

export default withStyles(styles)(ProductEdit);
