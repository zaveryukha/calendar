import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import routes from '../routes';
import 'styles/reset.css';
import ZoomControl from 'components/ZoomControl/ZoomControl';
import { ReactQueryConfigProvider } from 'react-query';

const queryConfig = { refetchAllOnWindowFocus: false };

export default ({ store }) => {
    return (
        <ReactQueryConfigProvider config={queryConfig}>
            <Provider store={store}>
                <HashRouter>{routes}</HashRouter>
                <ZoomControl />
            </Provider>
        </ReactQueryConfigProvider>
    );
};
