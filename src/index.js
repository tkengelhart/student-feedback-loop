import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
// import { ChakraProvider } from '@chakra-ui/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import { themeProvider } from "@chakra-ui/react";
import registerServiceWorker from './registerServiceWorker';
// import { ThemeProvider } from '@emotion/react';


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
    if (action.type === 'ADD_FEELING') {
        return action.payload
    } else if (action.type === 'RESET') {
        let newState = 0;
        state = newState;
    }
    return state;
}

const understandReducer = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTAND') {
        return action.payload
    } else if (action.type === 'RESET') {
        let newState = 0;
        state = newState;
    }
    return state;
}
const supportReducer = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload
    } else if (action.type === 'RESET') {
        let newState = 0;
        state = newState;
    }
    return state;
}
const commentsReducer = (state = [], action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload
    } else if (action.type === 'RESET') {
        let newState = [];
        state = newState;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger)

);



ReactDOM.render(
    // <ChakraProvider>
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
    // </ChakraProvider>
);
registerServiceWorker();
//not going to use this one
// const reviewReducer = (state = {}, action) => {
//     if (action.type === 'DISPLAY_REVIEW') {
//         return action.payload;
//     }
//     let newState = [...state, action.payload];
//     return newState;
// }


//not longer using this one either

// const submissionReducer = (state = {}, action) => {
//     if (action.type === 'SUBMIT') {
//         let newState = [...state, action.payload];
//         return newState,
//             alert('Success!');
//     }
// }

