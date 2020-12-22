import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import './reset.st.css';
import {FontUpgrade} from 'wix-style-react';

ReactDOM.render(
    <React.StrictMode>
        <FontUpgrade>
            <App/>
        </FontUpgrade>
    </React.StrictMode>,
    document.body.appendChild(document.createElement('div'))
);