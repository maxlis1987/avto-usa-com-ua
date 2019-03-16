import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './container/App';
import withRoot from './withRoot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style.css';
import { SnackbarProvider } from 'notistack';

const Index = () => (
  <SnackbarProvider maxSnack={3}>
  <Provider store={store}>
    <App />
  </Provider>
  </SnackbarProvider>
);
const Root = withRoot(Index)
render(
<Root />,
  document.getElementById('root'),
);
