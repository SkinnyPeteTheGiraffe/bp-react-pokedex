// Import and load DotENV config right away to gain access
import 'dotenv/config';

import React from 'react';
import radium from 'radium';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

const { StyleRoot } = radium;


ReactDOM.render(
    <React.StrictMode>
        <CssBaseline>
            <StyleRoot className="h-100">
                <App />
            </StyleRoot>
        </CssBaseline>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
