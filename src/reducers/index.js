import {combineReducers} from 'redux';
import {dataReducer} from './data_reducer';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

const reducers = combineReducers({
    sensorData: dataReducer
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export {store};
