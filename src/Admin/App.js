import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory as createHistory } from 'history';
import './App.css';
import authProvider from './authProvider';
import sagas from './sagas';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import englishMessages from './i18n/en';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';

import dataProviderFactory from './dataProvider';
const history = createHistory();

const i18nProvider = (locale) => {
	if (locale === 'fr') {
		return import('./i18n/fr').then((messages) => messages.default);
	}

	// Always fallback on english
	return englishMessages;
};

class App extends Component {
	state = { dataProvider: null };

	async componentWillMount() {
		// this.restoreFetch = await fakeServerFactory(
		//     process.env.REACT_APP_DATA_PROVIDER
		// );

		const dataProvider = await dataProviderFactory();

		this.setState({ dataProvider });
	}

	componentWillUnmount() {
		this.restoreFetch();
	}

	render() {
		const { dataProvider } = this.state;

		if (!dataProvider) {
			return (
				<div className="loader-container">
					<div className="loader">Loading...</div>
				</div>
			);
		}
		const admin = window.sessionStorage.getItem('admin');
		return (
			<Admin
				title=""
				dataProvider={dataProvider}
				customReducers={{ theme: themeReducer }}
				customSagas={sagas}
				// customRoutes={customRoutes}
				// authProvider={authProvider}
				// dashboard={Dashboard}
				loginPage={Login}
				appLayout={Layout}
				locale="en"
				i18nProvider={i18nProvider}
			>
				<Resource
					name="cars"
					create={admin === 'isLogin' ? products.create : false}
					list={products.list}
					edit={products.edit}
					icon={products.icon}
					show={products.show}
				/>
				<Resource
					name="soldcars"
					create={admin === 'isLogin' ? products.create : false}
					list={products.list}
					edit={products.edit}
					icon={products.icon}
					show={products.show}
				/>
			</Admin>
		);
	}
}

export default App;
{
	/* <Resource name="customers" {...visitors} />
<Resource
name="commands"
{...orders}
options={{ label: 'Orders' }}
/>
<Resource name="invoices" {...invoices} />
<Resource name="categories" {...categories} />
<Resource name="reviews" {...reviews} /> */
}
