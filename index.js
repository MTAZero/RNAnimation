/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App.js';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import { createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/redux/reducers';
import rootSaga from './src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

class MainApp extends Component{
    render(){
        return (
            <Provider store={store}> 
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => MainApp);
