import React from 'react';
import compose from 'recompose/compose';
import MuiGridList from '@material-ui/core/GridList';

import MuiGridListTile from '@material-ui/core/GridListTile';
import MuiGridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { Link } from 'react-router-dom';
import { NumberField } from 'react-admin';
import { linkToRecord } from 'ra-core';

const styles = (theme) => ({
	root: {
		display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	    overflow: 'hidden',
	},
	gridList: {
		width: '100%',
		margin: '2px',
		flexGrow: '1',
		height: 'auto' 
	},
	tileBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 70%,rgba(0,0,0,0) 100%)',
		whiteSpace: 'normal',
		height: '50%'
	},
	placeholder: {
		backgroundColor: theme.palette.grey[300],
		height: '100%'
	},
	price: {
		display: 'inline',
		fontSize: '1.5em',
		color: 'tomato'
	},
	link: {
		color: '#fff'
	},
	titleBar: {
		color: 'silverblue',
		fontSize: '1em',
		whiteSpace: 'normal'
	}
});

const getColsForWidth = (width) => {
	if (width === 'xs') return 2;
	if (width === 'sm') return 3;
	if (width === 'md') return 4;
	if (width === 'lg') return 5;
	return 6;
};

const times = (nbChildren, fn) => Array.from({ length: nbChildren }, (_, key) => fn(key));

const LoadingGridList = ({ width, classes, nbItems = 10 }) => (
	<div className={classes.root}>
		<MuiGridList cellHeight={180} cols={getColsForWidth(width)} className={classes.gridList}>
			{times(nbItems, (userId) => (
				<MuiGridListTile key={userId}>
					<div className={classes.placeholder} />
				</MuiGridListTile>
			))}
		</MuiGridList>
	</div>
);

const LoadedGridList = ({ classes, ids, data, basePath, width }) => {
	return (
		<div className={classes.root}>
			<MuiGridList 
			cols={getColsForWidth(width)} 
			className={classes.gridList}>
				{ids.map((id) => {
					return (
						<MuiGridListTile 
						component={Link} 
						key={id} 
						to={linkToRecord(basePath, data[id].id)}>
							<img src={JSON.parse(data[id].image_path)[0]} alt="" />
							<MuiGridListTileBar
								classes={{
							        title: classes.titleBar, 
							        root: classes.tileBar
							      }}
								title={data[id].title}
								subtitle={
									<NumberField
											className={classes.price}
											source="price"
											record={data[id]}
											color="inherit"
											options={{
												style: 'currency',
												currency: 'USD'
											}}
										/>
								}
							/>
						</MuiGridListTile>
					);
				})}
			</MuiGridList>
		</div>
	);
};
const GridList = ({ loadedOnce, ...props }) => {
	return loadedOnce ? <LoadedGridList {...props} /> : <LoadingGridList {...props} />;
};
const enhance = compose(withWidth(), withStyles(styles));

export default enhance(GridList);
