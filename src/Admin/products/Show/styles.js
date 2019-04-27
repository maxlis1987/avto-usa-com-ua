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
		fontSize: '1.1em',
		textAlign: 'center'
	},
	priceLabel: {
		fontSize: '1.8em',
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
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between'
	}
};
export { createStyles, styles };
