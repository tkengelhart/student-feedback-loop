import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';


//just creating skeletons of what is needed
const feelingReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_FEELING') return action.payload;
    return state;
};
const understandReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_UNDERSTAND') return action.payload;
    return state;
}; const supportReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_SUPPORT') return action.payload;
    return state;
}; const commentReducer = (state = 0, action) => {
    if (action.type === 'SUBMIT_COMMENT') return action.payload;
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentReducer
    })
)














ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
