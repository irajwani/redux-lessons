import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reducer from './store/reducer'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducerA from './store/reducers/reducerA';
import reducerB from './store/reducers/reducerB';


//In this case, we use the middleware to catch/log a particular action's invocation
const logAction = store => {
    return next => {
        return action => {
            const result = next(action); //now we take a snapshot of the action
            console.log("Caught in the middleware: " + JSON.stringify(result));
            return result //to continue the action's track
        }
    }
}

const reducer = combineReducers({rA: reducerA,rB: reducerB});

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
