import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Service/Reducers/index';


const store=createStore(rootReducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);


// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
