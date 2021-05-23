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
    let newState = state;
    if (action.type === 'ADD_FEELING') {
        newState = action.payload;
    }
    return newState;
}

const understandReducer = (state = 0, action) => {
    let newState = state;
    if (action.type === 'ADD_UNDERSTAND') {
        newState = action.payload;
    }
    return newState;
}
const supportReducer = (state = 0, action) => {
    let newState = state;
    if (action.type === 'ADD_SUPPORT') {
        newState = action.payload;
    }
    return newState;
}

const commentsReducer = (state = '', action) => {
    let newState = state;
    if (action.type === 'ADD_COMMENTS') {
        let newState = action.payload;
    }
    return newState;
}

// const reviewReducer = (state = {}, action) => {
//     if (action.type === 'DISPLAY_REVIEW') {
//         return action.payload;
//     }
//     let newState = [...state, action.payload];
//     return newState;
// }

// const submissionReducer = (state = [''], action) => {
//     if (action.type === 'SUBMIT') {
//         return action.payload;
//     }
//     applyMiddleware(logger)
// }


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

