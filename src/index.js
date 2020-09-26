import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './containers';
import Style from './style';

render(
    <Provider store={store}>
        <Style.GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('layout')
);
