/* global SwaggerUi */
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';

render(
    <Provider store={store}>
        <App api={store.getState().apiInfo} error={null}/>
    </Provider>,
    document.getElementById('api-console')
);

store.subscribe(() => {
    const state = store.getState();
    const api = state.apiInfo;
    const error = state.error;

    /* eslint-disable no-console */
    console.log('NEW STATE', state);
    /* eslint-enable no-console */
    render(<App api={api} error={error}/>, document.getElementById('api-console'));
});

