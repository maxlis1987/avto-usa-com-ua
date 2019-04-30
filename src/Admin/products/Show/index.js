import React, { Fragment } from 'react';
import { Edit, SaveButton, TextField, SimpleForm, DeleteButton, Toolbar, Responsive } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper } from '@material-ui/core';
import SliderImages from './SliderImages';
import { styles } from './styles';
import { body, drive, engine, gasoline, odometer, transmission } from './img';

const ProductEdit = ({ classes, ...props }) => {
	return (
		<Edit {...props} title={<ProductTitle />}>
			<SimpleForm toolbar={<PostShowActions />} className={classes.main} redirect="show" resource="userId">
				<Paper className={classes.headerDescriptionLable}>
					Все машины уже выкуплены и оплачены с аукционов и находиться в порту Одесса. <br /> По вопросам
					оплаты или заказа автомобиля обращаться по тел. 0672323457 0982416505 0975993309
				</Paper>
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
				<LabelShow {...props} mobailSizeIcon={30} className={classes.labelGridMobile} />
				<SliderImages {...props} className={classes.imageBlockMobile} />
				<span>{props.record.description}</span>
			</Fragment>
		}
		medium={
			<Fragment>
				<div style={{ display: 'inline-flex', width: '100%' }}>
					<SliderImages {...props} className={classes.imageBlock} />
					<div style={{ display: 'block', marginTop: 10, width: '100%' }}>
						<h3 className={classes.titleLabel}>
							{props.record.title}
						</h3>
						<h3 className={classes.priceLabel}>
							{props.record.price}
						</h3>
						<p className={classes.descriptionLabel}>
							Стоимость включает в себя доставку в порт Одесса и растаможку автомобиля.
						</p>
						<p className={classes.arriveDateLabel}>
							Дата доставки автомобиля в порт Одесса: {props.record.arriveDate}
						</p>
						<LabelShow {...props} className={classes.labelGrid} myMargin={50} />
						<p className={classes.description}>{props.record.description}</p>
					</div>
				</div>
			</Fragment>
		}
	/>
));
const LabelShow = withStyles(styles)(({ classes, className, myMargin, mobailSizeIcon, ...props }) => {
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
			{items.map((item) => (
				<ItemLabel myMargin={myMargin} key={item.id} {...item} mobailSizeIcon={mobailSizeIcon} />
			))}
		</div>
	);
});

const ItemLabel = withStyles(styles)(({ classes, label, image, myMargin, mobailSizeIcon }) => (
	<span className={classes.widthFormGroup} style={{ marginTop: myMargin }}>
		<img
			src={image}
			alt=""
			style={{ width: mobailSizeIcon ? mobailSizeIcon : 30, height: mobailSizeIcon ? mobailSizeIcon : 30 }}
		/>
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
