import { createBrowserHistory, createHashHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import monitorReducersEnhancer from '../enhancers/monitorReducer';
import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers/rootReducer';

export const history = !window.desktopApp ? createBrowserHistory() : createHashHistory()

export default function configureStore(preloadedState) {

    const middlewares = [loggerMiddleware, thunkMiddleware, routerMiddleware(history)];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer(history), preloadedState, composedEnhancers);

    return store;
};
