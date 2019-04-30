import { styles as createStyles } from '../Create';
const styles = {
	...createStyles,
	comment: {
		maxWidth: '20em',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap'
	},
	widthFormGroup: { 
		display: 'inline-block', 
		textAlign: 'center' 
	},
	main: {
		display: 'block',
		textAlign: 'left'
	},
	titleLabel: {
		fontSize: '1.1em',
		textAlign: 'center',
		margin: 10,
		fontWeight: 'bold',

	},
	priceLabel: {

		margin: 10,
		fontSize: '1.3em',
		fontWeight: 'bold',
		color: 'tomato',
		textAlign: 'center',

	},
	descriptionLabel: {
		fontSize: '1em',
		color: 'blue',
		margin: 10,
		fontStyle: 'italic',
		marginTop: 0,
		textAlign: 'center'
	},
	description: {
		maxWidth: '100%',
		fontSize: '1em',
		color: 'charcoal-grey',
		margin: 10,
		fontStyle: 'italic',
		marginTop: 0,
		textAlign: 'center',
		position: 'relative',
		top: 50
	},

	imageBlock: {
		float: 'left',
		margin: '7px 7px 7px 0px',
		width: '50%'
	},
	delete: { display: 'none' },
	labelGrid: {
		display: 'grid',
		grid: 'repeat(2, 100px) / repeat(3, 1fr)',
		marginTop: -10,
		marginLeft: 20,
		heigth: 200,
		maxWidth: '100%',
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
		backgroundColor: 'skyblue',
		color: 'red',
		width: '100%',
		lineHeight: 1.3,
		margin: '0px 0px 0px 0px',
		textAlign: 'center',
		fontStyle: 'oblique',
		fontSize: '1.1em',
		fontWeight: 'bold',
		borderRadius: '10px'
	},
	arriveDateLabel: {
		fontSize: '1.1em',
		color: 'green',
		margin: 10,
		fontStyle: 'oblique',
		marginTop: 0,
		textAlign: 'center',
		fontWeight: 'bold'
	}
};
export { createStyles, styles };
