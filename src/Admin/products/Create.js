import React, { useEffect, useState } from 'react';
import { Create, FormTab, SaveButton, TabbedForm, TextInput, required } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import useFormInput from './Network/onChange';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import UploadFileList from './UploadFileList';
export const styles = {
	stock: { width: '5em' },
	price: { width: '5em' },
	width: { width: '5em' },
	widthFormGroup: { display: 'inline-block', margin: 5 },
	height: { width: '5em' },
	heightFormGroup: { display: 'inline-block', marginLeft: 32 }
};

const CREATE_CAR = gql`
	mutation createCar(
		$title: String
		$description: String
		$link: String
		$price: String
		$image_path: String
		$vincode: String
		$drive: String
		$arriveDate: String
		$fuelType: String
		$engineVolume: String
		$odometer: String
		$typeBody: String
		$transmission: String
	) {
		createCar(
			title: $title
			description: $description
			link: $link
			price: $price
			image_path: $image_path
			vincode: $vincode
			drive: $drive
			arriveDate: $arriveDate
			fuelType: $fuelType
			engineVolume: $engineVolume
			odometer: $odometer
			typeBody: $typeBody
			transmission: $transmission
		) {
			title
			description
			link
			price
			image_path
			vincode
			drive
			arriveDate
			fuelType
			engineVolume
			odometer
			typeBody
			transmission
		}
	}
`;

const ApproveButton = ({
	title,
	image_path,
	price,
	vincode,
	link,
	description,
	drive,
	fuelType,
	engineVolume,
	arriveDate,
	odometer,
	typeBody,
	transmission
}) => {
	let isDisabled =
		title !== '' &&
		image_path &&
		price !== '' &&
		vincode !== '' &&
		link !== '' &&
		description !== '' &&
		drive !== '' &&
		fuelType !== '' &&
		engineVolume !== '' &&
		odometer !== '' &&
		typeBody !== '' &&
		arriveDate !== '' &&
		transmission !== '';

	return (
		<Mutation type="CREATE" resource="products" mutation={CREATE_CAR}>
			{(createCar, { data }) => (
				<SaveButton
					label="Save"
					disabled={!isDisabled}
					style={{ margin: 25 }}
					onClick={(e) => {
						createCar({
							variables: {
								title,
								image_path,
								price,
								vincode,
								link,
								description,
								drive,
								fuelType,
								engineVolume,
								odometer,
								typeBody,
								arriveDate,
								transmission
							}
						});
						isDisabled = false;
						setTimeout(() => {
							window.location.href = '/#/cars/create';
							document.location.reload(true);
						}, 1000);

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
	const drive = useFormInput('');
	const fuelType = useFormInput('');
	const arriveDate = useFormInput('');
	const engineVolume = useFormInput('');
	const odometer = useFormInput('');
	const typeBody = useFormInput('');
	const transmission = useFormInput('');

	const payload = {
		image_path: image_path,
		title: title.value,
		price: price.value,
		vincode: vincode.value,
		link: link.value,
		description: description.value,
		drive: drive.value,
		arriveDate: arriveDate.value,
		fuelType: fuelType.value,
		engineVolume: engineVolume.value,
		odometer: odometer.value,
		typeBody: typeBody.value,
		transmission: transmission.value
	};
	return (
		<Create {...props}>
			<TabbedForm toolbar={<ApproveButton {...payload} />}>
				<FormTab label="resources.products.tabs.details">
					<TextInput {...title} source="title" validate={required()} formClassName={classes.widthFormGroup} />
					<TextInput {...drive} source="drive" validate={required()} formClassName={classes.widthFormGroup} />
					<TextInput {...arriveDate} source="arriveDate" validate={required()} formClassName={classes.widthFormGroup} />
					<TextInput
						{...fuelType}
						source="fuelType"
						validate={required()}
						formClassName={classes.widthFormGroup}
					/>
					<TextInput
						{...engineVolume}
						source="engineVolume"
						validate={required()}
						formClassName={classes.widthFormGroup}
					/>
					<TextInput
						{...odometer}
						source="odometer"
						validate={required()}
						formClassName={classes.widthFormGroup}
					/>
					<TextInput
						{...typeBody}
						source="typeBody"
						validate={required()}
						formClassName={classes.widthFormGroup}
					/>
					<TextInput
						{...transmission}
						source="transmission"
						validate={required()}
						formClassName={classes.widthFormGroup}
					/>
					<TextInput {...price} source="price" validate={required()} formClassName={classes.widthFormGroup} />
					<TextInput
						{...vincode}
						source="vincode"
						validate={required()}
						formClassName={classes.widthFormGroup}
					/>
					<TextInput {...link} source="link" validate={required()} formClassName={classes.heightFormGroup} />
				</FormTab>
				<FormTab label="resources.products.tabs.description" path="description">
					<textarea rows={15} cols={15} {...description} source="description" />
				</FormTab>
				<FormTab label="resources.products.tabs.image">
					<UploadFileList myChange={setValue} />
				</FormTab>
			</TabbedForm>
		</Create>
	);
};
export default withStyles(styles)(ProductCreate);
