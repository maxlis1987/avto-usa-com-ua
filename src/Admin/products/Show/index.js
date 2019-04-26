import React, { Fragment } from 'react';
import { Edit, SaveButton, TextField, SimpleForm, DeleteButton, Toolbar, Responsive } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import SliderImages from './SliderImages';
import { styles } from './styles';
import { body, drive, engine, gasoline, odometer, transmission } from './img';

const ProductEdit = ({ classes, ...props }) => {
	return (
		<Edit {...props} title={<ProductTitle />}>
			<SimpleForm toolbar={<PostShowActions />} className={classes.main} redirect="show" resource="userId">
				<ResponsiveBlock {...props} />
			</SimpleForm>
		</Edit>
	);
};
const ResponsiveBlock = withStyles(styles)(({ classes, ...props }) => (
	<Responsive
		xsmall={
			<Fragment>
				<div className={classes.headerShow}>
					<span className={classes.titleLabel}>{props.record.title}</span>
					<span className={classes.priceLabel}>{props.record.price}</span>
				</div>
				<LabelShow {...props} className={classes.labelGrid} />
				<SliderImages {...props} className={classes.imageBlock} />
				<span>{props.record.description}</span>
			</Fragment>
		}
		medium={
			<Fragment>
				<div className={classes.headerShow}>
					<span className={classes.titleLabel}>{props.record.title}</span>
					<span className={classes.priceLabel}>{props.record.price}</span>
				</div>
				<div style={{ display: 'inline-flex' }}>
					<SliderImages {...props} className={classes.imageBlock} />
					<LabelShow {...props} className={classes.labelGrid} myMargin={50} />
				</div>
				<p>{props.record.description}</p>
			</Fragment>
		}
	/>
));
const LabelShow = ({ className, myMargin, ...props }) => {
	const items = [
		{ label: props.record.drive, image: drive, id: 1 },
		{ label: props.record.fuelType, image: gasoline, id: 2 },
		{ label: props.record.engineVolume, image: engine, id: 3 },
		{ label: props.record.odometer, image: odometer, id: 4 },
		{ label: props.record.typeBody, image: body, id: 5 },
		{ label: props.record.transmission, image: transmission, id: 6 }
	];
	return (
		<div className={className}>
			{items.map((item) => <ItemLabel myMargin={myMargin} key={item.id} {...item} />)}
		</div>
	);
};

const ItemLabel = withStyles(styles)(({ classes, label, image, myMargin }) => (
	<span className={classes.widthFormGroup} style={{ marginTop: myMargin }}>
		<img src={image} alt="" style={{ width: 40, height: 40 }} />
		<br />
		{label}
	</span>
));

const ProductTitle = ({ record }) => <span>{record.title}</span>;

const PostShowActions = (props) => {
	const isLogin = window.sessionStorage.getItem('admin');
	return (
		<Toolbar>
			<DeleteButton basePath={props.basePath} record={props.record} style={styles.delete} />
			<SaveButton basePath={props.basePath} record={props.record} style={styles.delete} />
		</Toolbar>
	);
};
export default withStyles(styles)(ProductEdit);
