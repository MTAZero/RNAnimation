import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import rootSaga from '../redux/sagas';

//const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
//const routeMiddleware = routerMiddleware(history);
const middleware = [sagaMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
export {store};

