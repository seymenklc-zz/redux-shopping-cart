import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);

