import { styles as createStyles } from '../Create';
const styles = {
	...createStyles,
	comment: {
		maxWidth: '20em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	widthFormGroup: { display: 'inline-block', margin: 5, textAlign: 'center' },
	main: {
		display: 'block',
		textAlign: 'left'
	},
	titleLabel: {
		display: 'inline-block',
		fontSize: '1.1em',
		textAlign: 'center',
		margin: 10
	},
	descriptionLabel: {
		maxWidth: '20em',
		fontSize: '1em',
		color: 'blue',
		margin: 10,
		fontStyle: 'italic',
		marginTop: 0,
		textAlign: 'left'
	},
	description: {
		maxWidth: '20em',
		fontSize: '1em',
		color: 'charcoal-grey',
		margin: 10,
		fontStyle: 'italic',
		marginTop: 0,
		textAlign: 'left',
		position: 'relative',
		top: 50
	},
	priceLabel: {
		display: 'inline-block',
		margin: 10,
		marginLeft: 30,
		fontSize: '1.3em',
		fontWeight: 'bold',
		color: 'tomato',
		textAlign: 'center'
	},
	imageBlock: {
		float: 'left',
		margin: '7px 7px 7px 0px'
	},
	delete: { display: 'none' },
	labelGrid: {
		display: 'grid',
		grid: 'repeat(2, 100px) / repeat(3, 1fr)',
		marginTop: -10,
		marginLeft: 20,
		heigth: 200,
		maxWidth: 400,
		'& > *': {
			width: 100,
			margin: 'auto'
		}
	},
	labelGridMobile: {
		display: 'grid',
		grid: 'repeat(2, 100px) / repeat(3, 1fr)',
		gridGap: 25,
		heigth: 200,
		maxWidth: 400,
		'& > *': {
			width: 100,
			margin: 'auto',
			heigth: 40
		}
	},
	headerShow: {
		margin: 20,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	},
	headerDescriptionLable: {
		backgroundColor: 'orange',
		color: 'blue',
		width: '80%',
		lineHeight: 1.3,
		margin: '0px 0px 0px 0px'
	}
};
export { createStyles, styles };
