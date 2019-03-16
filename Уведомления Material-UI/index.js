import React from 'react';
import ReactDOM from 'react-dom';

import { SnackbarProvider } from 'notistack';

import App from './components/Todos';

import './index.scss';
//https://github.com/iamhosseindhv/notistack
ReactDOM.render(
	<SnackbarProvider maxSnack={3}>
		<App />
	</SnackbarProvider>,
	document.getElementById('root'),
);
