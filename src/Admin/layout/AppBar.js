import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate, Responsive } from 'react-admin';
import { Typography, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core/styles';

// import Logo from './Logo';

const styles = {
	title: {
		flex: 1,
		// textOverflow: 'ellipsis',
		whiteSpace: 'wrap',
		overflow: 'hidden',
		'& > *': {
			margin: 'auto',
			textAlign: 'center'
		}
	},
	spacer: {
		flex: 1
	}
};

const CustomUserMenu = translate(({ translate, ...props }) => (
	<UserMenu {...props}>
		<MenuItemLink to="/login" primaryText={translate('login')} leftIcon={<SettingsIcon />} />
	</UserMenu>
));
// userMenu={<CustomUserMenu />}  <Logo />
const CustomAppBar = ({ classes, ...props }) => (
	<AppBar userMenu={<CustomUserMenu />} {...props}>
		<Responsive
			xsmall={<div />}
			medium={
				<Typography variant="title" color="inherit" className={classes.title}>
					<p>
						<strong>
							<i>Авто из США с аукционов</i> 0678323457 0982416505 0975993309
						</strong>
					</p>
				</Typography>
			}
		/>

		<span className={classes.spacer} />
	</AppBar>
);

export default withStyles(styles)(CustomAppBar);
