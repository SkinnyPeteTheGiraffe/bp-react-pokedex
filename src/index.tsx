// Import and load DotENV config right away to gain access
import 'dotenv/config';

import React from 'react';
import radium from 'radium';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const { StyleRoot } = radium;

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <StoreProvider store={store}>
                <CssBaseline>
                    <StyleRoot style={{ flexGrow: 1, display: 'flex' }}>
                        <App />
                    </StyleRoot>
                </CssBaseline>
            </StoreProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
