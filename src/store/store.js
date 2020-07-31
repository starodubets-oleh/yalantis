import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const middleware = [thunk];

const allReducers = combineReducers(
    {
        reducer
    }
);

const initialState = {
    reducer: {
        data: [],
    },
};

const store = createStore(allReducers, initialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;