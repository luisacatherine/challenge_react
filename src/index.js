import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AppRouter from './router/AppRouter';
import Blog from './pages/Blog';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'unistore/react';
import { store } from './store';

// ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<Gallery />, document.getElementById('root'));
// ReactDOM.render(<Contact />, document.getElementById('root'));
// ReactDOM.render(<Blog />, document.getElementById('root'));

const rootEl = document.getElementById('root');
const render = Component =>
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component/>
            </BrowserRouter>
        </Provider>,
        rootEl
    );
    
render(AppRouter);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
