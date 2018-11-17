import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { initialState } from './store';
import './index.css';

const store = configureStore(initialState);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
