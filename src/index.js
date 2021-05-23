import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';


//just creating skeletons of what is needed

// // 1. import `ChakraProvider` component
// import { ChakraProvider } from "@chakra-ui/react"
// function App({ Component }) {
//     // 2. Use at the root of your app
//     return (
//         <ChakraProvider>
//             <Component />
//         </ChakraProvider>
//     )
// }

const feelingReducer = (state = 0, action) => {
    if (action.type === 'ADD_FEELING') return action.payload;
    return state;

}

const understandReducer = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTAND') return action.payload;
    return state;

}
const supportReducer = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORT') return action.payload;
    return state;

}

const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') return action.payload;
    return state;
}


// const reviewReducer = (state = {}, action) => {
//     if (action.type === 'DISPLAY_REVIEW') {
//         return action.payload;
//     }
//     let newState = [...state, action.payload];
//     return newState;
// }

const submissionReducer = (state = {}, action) => {
    if (action.type === 'SUBMIT') {
        let newState = [...state, action.payload];
        return newState,
            alert('Success!');
    }
    applyMiddleware(logger)
}


const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentsReducer,
        // reviewReducer,
        // submissionReducer
    }),
    applyMiddleware(logger)

);







ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

