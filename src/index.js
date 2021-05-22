import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

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


const feelingReducer = (state = '0', action) => {
    if (action.type === 'SEND_FORM1')
        return action.payload;
    return state;
}

const understandReducer = (state = 0, action) => {
    if (action.type === 'SEND_FORM2')
        return action.payload;

    return state;
}

const supportReducer = (state = 0, action) => {
    if (action.type === 'SEND_FORM3')
        return action.payload;

    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'SEND_FORM4')
        return action.payload;

    return state;
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
        commentReducer,
        // reviewReducer,
        // submissionReducer
    })
)














ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

