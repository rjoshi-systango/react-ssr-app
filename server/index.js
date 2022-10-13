import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import express from 'express';
import App from '../src/App';
import renderView from './middleware/renderView';
import HomePage from '../src/pages/home';
import ProductPage from '../src/pages/product';
import StaticPage from '../src/pages/static';
import { matchPath } from 'react-router-dom';
import ProductDetails from '../src/component/productDetails';

const PORT = process.env.PORT || 3003;
const app = express();



const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/product',
        component: ProductPage
    },
    {
        path: '/static-content',
        component: StaticPage
    },
    {
        path: '/product/',
        component: ProductDetails
    }

]

app.get('/*', (req, res, next) => {
    console.log('req', req);
    // console.log("request url", req.url);
    const activeRoute = routes.find(route => {
        if (req.url === route.path) {
            return {
                path: route.path,
                component: route.component ? route.component : null
            }
        }
    });
    renderView(req, res, next, activeRoute?.component)
})

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});