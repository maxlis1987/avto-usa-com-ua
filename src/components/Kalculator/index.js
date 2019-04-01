import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './container/App';
// import withRoot from './withRoot';

// import { SnackbarProvider } from 'notistack';

const Index = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
  {/* <SnackbarProvider maxSnack={3}>
  </SnackbarProvider> */}
export default  Index
