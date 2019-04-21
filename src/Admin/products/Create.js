import React, { useEffect, useState } from 'react';
import { Create, FormTab, SaveButton, TabbedForm, TextInput, required } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import RichTextInput from 'ra-input-rich-text';
import useFormInput from './Network/onChange';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import UploadFileList from './UploadFileList';
export const styles = {
	stock: { width: '5em' },
	price: { width: '5em' },
	width: { width: '5em' },
	widthFormGroup: { display: 'inline-block' },
	height: { width: '5em' },
	heightFormGroup: { display: 'inline-block', marginLeft: 32 },
	delete: { display: 'none' }
};

const CREATE_POST = gql`
	mutation createPost(
		$title: String
		$description: String
		$link: String
		$price: String
		$image_path: String
		$vincode: String
	) {
		createPost(
			title: $title
			description: $description
			link: $link
			price: $price
			image_path: $image_path
			vincode: $vincode
		) {
			title
			description
			link
			price
			image_path
			vincode
		}
	}
`;

const ApproveButton = ({ title, image_path, price, vincode, link, description }) => {
	return (
		<Mutation type="CREATE" resource="products" mutation={CREATE_POST}>
			{(createPost, { data }) => (
				<SaveButton
					label="Save"
					onClick={(e) => {
						createPost({
							variables: {
								title,
								image_path,
								price,
								vincode,
								link,
								description
							}
						});
						return data;
					}}
				/>
			)}
		</Mutation>
	);
};

const ProductCreate = ({ classes, ...props }) => {
	const title = useFormInput('');

	const [ image_path, setValue ] = useState('');
	const price = useFormInput('');
	const vincode = useFormInput('');
	const link = useFormInput('');

	const description = useFormInput('');
	useEffect(() => {}, [ image_path.length ]);
	const payload = {
		image_path: image_path,
		title: title.value,
		price: price.value,
		vincode: vincode.value,
		link: link.value,
		description: description.value
	};
	console.log('image_path', image_path);
	return (
		<Create {...props}>
			<TabbedForm toolbar={<ApproveButton {...payload} />}>
				<FormTab label="resources.products.tabs.image">
					<UploadFileList myChange={setValue} />
					<TextInput {...title} source="title" options={{ fullWidth: true }} validate={required()} />
				</FormTab>
				<FormTab label="resources.products.tabs.details">
					<TextInput {...price} source="price" validate={required()} className={classes.price} />
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
				</FormTab>
				<FormTab label="resources.products.tabs.description" path="description">
					<textarea rows={15} cols={15} {...description} source="description" addLabel={true} />
				</FormTab>
			</TabbedForm>
		</Create>
	);
};
export default withStyles(styles)(ProductCreate);
