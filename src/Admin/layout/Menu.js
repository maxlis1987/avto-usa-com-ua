import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from '@material-ui/icons/Settings';
import LabelIcon from '@material-ui/icons/Label';
import { withRouter } from 'react-router-dom';
import { translate, DashboardMenuItem, MenuItemLink, Responsive } from 'react-admin';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import visitors from '../visitors';
import orders from '../orders';
import invoices from '../invoices';
import products from '../products';
import categories from '../categories';
import reviews from '../reviews';
import SubMenu from './SubMenu';

class Menu extends Component {
	state = {
		menuCatalog: false,
		menuSales: false,
		menuCustomers: false
	};

	static propTypes = {
		onMenuClick: PropTypes.func,
		logout: PropTypes.object
	};

	handleToggle = (menu) => {
		this.setState((state) => ({ [menu]: !state[menu] }));
	};

	render() {
		const { onMenuClick, open, logout, translate } = this.props;
		return (
			<div>
				<MenuItemLink
					to={`/cars`}
					primaryText={`Автомобили`}
					leftIcon={<DirectionsCar style={{ color: 'blue' }} />}
					onClick={onMenuClick}
				/>
				{/*<SubMenu
                        handleToggle={() => this.handleToggle('menuSales')}
                        isOpen={this.state.menuSales}
                        sidebarIsOpen={open}
                        name="Cars"
                        icon={<orders.icon />}
                    >
                       <MenuItemLink
                            to={`/cars`}
                            primaryText={`Available cars`}
                            leftIcon={<orders.icon />}
                            onClick={onMenuClick}
                        />
                        <MenuItemLink
                            to={`/cars`}
                            primaryText={`Sold cars`}
                            leftIcon={<orders.icon />}
                            onClick={onMenuClick}
                        />
                        
                </SubMenu>*/}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	open: state.admin.ui.sidebarOpen,
	theme: state.theme,
	locale: state.i18n.locale
});

const enhance = compose(withRouter, connect(mapStateToProps, {}), translate);

export default enhance(Menu);
