// react components
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// redux components
import { Provider } from 'react-redux';
import store from './store';

// style
import GlobalStyle from './styles/Global';

// routes
import Routes from './routes'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </Provider>
)

export default App;
