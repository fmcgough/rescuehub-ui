import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store';

import { RootState, initialState } from './store';
import App from './App';

const mockStoreCreator: MockStoreCreator<RootState> = configureStore<RootState>();
let store: MockStore<RootState>;

describe('App', () => {

    beforeEach(() => {
        store = mockStoreCreator(initialState);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </MemoryRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

