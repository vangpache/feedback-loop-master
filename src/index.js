import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




const feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
    }


const feedbackReducer = (state = feedback, action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return {...state, feeling: action.payload};
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload};
        case 'SET_SUPPORT' :
            return { ...state, support: action.payload};
        case 'SET_COMMENTS' :
            return { ...state, comments: action.payload};
        default:
            return state;
    }
}


const getAllFeedBack = (state = [], action) => {
    if(action.type === 'GET_FEEDBACK') {
        return action.payload;
    }
    return state;
}


const store = createStore(
    combineReducers({
        feedbackReducer,
        getAllFeedBack,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
