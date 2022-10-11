import React from 'react';
import ReactDOMServer,{ renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { StaticRouter } from 'react-router-dom';
// import { match } from 'react-router-dom';
// import { match } from 'react-router';
import fetchProduct from '../../src/api/fetchProduct';
// import NewApp from '../../src/NewApp'

import App from '../../src/App';
import { routes } from '../shared/sharedRoutes';
// import initRedux from '../../src/Redux_Thunk/init-redux.es6';
import store from '../../src/Store';
import HTML from '../html';
// import store from '../../src/Store';
import initRedux from '../../src/Redux_Thunk/init-redux.es6';

export default function renderView(req, res, next) {
  const matchOpts = {
    routes: routes(),
    location: req.url
  };
  const handleMatchResult = (error, redirectLocation, renderProps) => {
    if (!error && !redirectLocation && renderProps) {
      const store1 = initRedux();
      console.log('store:::', store1);
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
        return store1.dispatch(initialAction());
      });
      console.log('promises:::', promises);

      Promise.all(promises).then(() => {
        const serverState = store1.getState();
        const stringifiedServerState = JSON.stringify(serverState);
        console.log('store', store1);
        const app = ReactDOMServer.renderToString(
          <Provider store={store1}>
            <StaticRouter >
              <App data={JSON.parse(stringifiedServerState)}/>
            </StaticRouter>
          </Provider>

        );
        // console.log("stringifiedServerState", stringifiedServerState);
        const html = ReactDOMServer.renderToString(
          <HTML html={app} serverState={stringifiedServerState} />
        );
        return res.send(`<!DOCTYPE html>${html}`);
      }).catch((err) => {
        console.log(err);
        return next();
      });
    } else {
      next();
    }
  };
  // handleMatchResult(matchOpts)
  match(matchOpts, handleMatchResult);
}
