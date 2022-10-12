import React from 'react';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';

import App from '../../src/App';
import { routes } from '../shared/sharedRoutes';
import HTML from '../renderer/renderComponent';
import { configureStore } from '../../src/Store';
import ProductPage from '../../src/pages/product';

export default function renderView(req, res, next, Component) {
    const matchOpts = {
        routes: routes(),
        location: req.url
    };
    const handleMatchResult = (error, redirectLocation, renderProps) => {
        if (!error && !redirectLocation && renderProps) {
            const store = configureStore();
            console.log('store:::', store);
            let actions = renderProps.components.map((component) => {
                if (component) {
                    console.log("component:::", component);

                    if (component.displayName &&
                        component.displayName.toLowerCase().indexOf('connect') > -1
                    ) {
                        if (component.WrappedComponent.loadData) {
                            console.log('component.WrappedComponent.loadData()', component.WrappedComponent.loadData());
                            return component.WrappedComponent.loadData();
                        }
                    } else if (component.loadData) {
                        console.log('component.loadData()', component.loadData());
                        return component.loadData();
                    }
                }
                return [];
            });
            actions = actions.reduce((flat, toFlatten) => {
                return flat.concat(toFlatten);
            }, []);
            console.log('actions:::', actions);
            const promises = actions.map((initialAction) => {
                console.log('initialAction:::', initialAction);
                return store.dispatch(initialAction());
            });
            console.log('promises:::', promises);

            Promise.all(promises).then(() => {
                const serverState = store.getState();
                const stringifiedServerState = JSON.stringify(serverState);
                console.log('store', store);
                const app = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <StaticRouter >
                            {Component && <Component />}
                        </StaticRouter>
                    </Provider>

                );
                console.log(app);
                // console.log("stringifiedServerState", stringifiedServerState);
                const html = ReactDOMServer.renderToString(
                    <HTML html={app} serverState={stringifiedServerState} />
                );
                return res.send(`<!DOCTYPE html>${html}`);
            })
            // .catch((err) => {
            //     console.log(err);
            //     return next();
            // });
        } else {
            next();
        }
    };
    // handleMatchResult(matchOpts)
    match(matchOpts, handleMatchResult);
}
