/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var _middleware_renderView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/renderView */ \"./server/middleware/renderView.js\");\n/* harmony import */ var _src_pages_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _src_pages_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/pages/product */ \"./src/pages/product.js\");\n/* harmony import */ var _src_pages_static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/pages/static */ \"./src/pages/static.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3003;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()();\nconst routes = [{\n  path: '/',\n  component: _src_pages_home__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, {\n  path: '/product',\n  component: _src_pages_product__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}, {\n  path: '/static-content',\n  component: _src_pages_static__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}];\napp.get('/*', (req, res, next) => {\n  console.log(\"request url\", req.url);\n  const activeRoute = routes.find(route => {\n    if (req.url === route.path) {\n      return {\n        path: route.path,\n        component: route.component ? route.component : null\n      };\n    }\n  });\n  // console.log(\"component of current route\", activeRoute.component);\n  (0,_middleware_renderView__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, res, next, activeRoute?.component);\n});\n\n// app.use(express.static('./build'));\n\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack://sample-ssr-app/./server/index.js?");

/***/ }),

/***/ "./server/middleware/renderView.js":
/*!*****************************************!*\
  !*** ./server/middleware/renderView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/App */ \"./src/App.js\");\n/* harmony import */ var _shared_sharedRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/sharedRoutes */ \"./server/shared/sharedRoutes.js\");\n/* harmony import */ var _renderer_renderComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/renderComponent */ \"./server/renderer/renderComponent.js\");\n/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/Store */ \"./src/Store/index.js\");\n/* harmony import */ var _src_pages_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/pages/product */ \"./src/pages/product.js\");\n\n\n\n\n\n\n\n\n\n\nfunction renderView(req, res, next, Component) {\n  const matchOpts = {\n    routes: (0,_shared_sharedRoutes__WEBPACK_IMPORTED_MODULE_6__.routes)(),\n    location: req.url\n  };\n  const handleMatchResult = (error, redirectLocation, renderProps) => {\n    if (!error && !redirectLocation && renderProps) {\n      const store = (0,_src_Store__WEBPACK_IMPORTED_MODULE_8__.configureStore)();\n      console.log('store:::', store);\n      let actions = renderProps.components.map(component => {\n        if (component) {\n          console.log(\"component:::\", component);\n          if (component.displayName && component.displayName.toLowerCase().indexOf('connect') > -1) {\n            if (component.WrappedComponent.loadData) {\n              console.log('component.WrappedComponent.loadData()', component.WrappedComponent.loadData());\n              return component.WrappedComponent.loadData();\n            }\n          } else if (component.loadData) {\n            console.log('component.loadData()', component.loadData());\n            return component.loadData();\n          }\n        }\n        return [];\n      });\n      actions = actions.reduce((flat, toFlatten) => {\n        return flat.concat(toFlatten);\n      }, []);\n      console.log('actions:::', actions);\n      const promises = actions.map(initialAction => {\n        console.log('initialAction:::', initialAction);\n        return store.dispatch(initialAction());\n      });\n      console.log('promises:::', promises);\n      Promise.all(promises).then(() => {\n        const serverState = store.getState();\n        const stringifiedServerState = JSON.stringify(serverState);\n        console.log('store', store);\n        const app = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n          store: store\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, null, Component && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null))));\n        console.log(app);\n        // console.log(\"stringifiedServerState\", stringifiedServerState);\n        const html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_renderer_renderComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          html: app,\n          serverState: stringifiedServerState\n        }));\n        return res.send(`<!DOCTYPE html>${html}`);\n      });\n      // .catch((err) => {\n      //     console.log(err);\n      //     return next();\n      // });\n    } else {\n      next();\n    }\n  };\n  // handleMatchResult(matchOpts)\n  (0,react_router__WEBPACK_IMPORTED_MODULE_3__.match)(matchOpts, handleMatchResult);\n}\n\n//# sourceURL=webpack://sample-ssr-app/./server/middleware/renderView.js?");

/***/ }),

/***/ "./server/renderer/renderComponent.js":
/*!********************************************!*\
  !*** ./server/renderer/renderComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst HTML = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"html\", {\n    lang: \"en\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"head\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/semantic-ui/2.2.4/semantic.min.css\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"Free Web tutorials\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"link\", {\n    rel: \"stylesheet\",\n    href: \"/assets/style.css\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    id: \"root\",\n    dangerouslySetInnerHTML: {\n      __html: props.html\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: `\n            window.__SERIALIZED_STATE__ =\n              JSON.stringify(${props.serverState})\n          `\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"script\", {\n    type: \"application/javascript\",\n    src: \"/browser.js\"\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML);\n\n//# sourceURL=webpack://sample-ssr-app/./server/renderer/renderComponent.js?");

/***/ }),

/***/ "./server/shared/sharedRoutes.js":
/*!***************************************!*\
  !*** ./server/shared/sharedRoutes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/App */ \"./src/App.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_pages_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/pages/product */ \"./src/pages/product.js\");\n/* harmony import */ var _src_pages_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/pages/static */ \"./src/pages/static.js\");\n\n\n\n\n\nconst routes = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/\",\n    component: _src_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/product\",\n    component: _src_pages_product__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    path: \"/static-content\",\n    component: _src_pages_static__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }));\n};\n\n//# sourceURL=webpack://sample-ssr-app/./server/shared/sharedRoutes.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Routes */ \"./src/Routes/index.js\");\n/* harmony import */ var _Store_cart_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store/cart-action */ \"./src/Store/cart-action.js\");\n// import logo from './logo.svg';\n// import './App.css';\n\n\n\n\nfunction App() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const items = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.items);\n  console.log('console from csr', items);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch(_Store_cart_action__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCartItems());\n  }, [_Store_cart_action__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\nApp.loadData = () => {\n  return [_Store_cart_action__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCartItems];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://sample-ssr-app/./src/App.js?");

/***/ }),

/***/ "./src/Routes/index.js":
/*!*****************************!*\
  !*** ./src/Routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Routes)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/product */ \"./src/pages/product.js\");\n/* harmony import */ var _pages_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/static */ \"./src/pages/static.js\");\n\n\n\n\n\nfunction Routes() {\n  console.log(\"routes\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    exact: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/product\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_product__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/static-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_static__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))\n  // <div></div>\n  ;\n}\n\n//# sourceURL=webpack://sample-ssr-app/./src/Routes/index.js?");

/***/ }),

/***/ "./src/Store/cart-action.js":
/*!**********************************!*\
  !*** ./src/Store/cart-action.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_CART_ITEMS\": () => (/* binding */ GET_CART_ITEMS),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getCartItems\": () => (/* binding */ getCartItems)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_CART_ITEMS = 'GET_CART_ITEMS';\nfunction getCartItems() {\n  return dispatch => {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()('https://shop-trade-46795-default-rtdb.firebaseio.com/product_detail.json', {\n      method: 'GET'\n    }).then(response => {\n      return response.json().then(data => {\n        let newData = [];\n        for (let key in data) {\n          newData.push(data[key]);\n        }\n        return dispatch({\n          type: GET_CART_ITEMS,\n          data: newData\n        });\n      });\n    }).catch(() => {\n      return dispatch({\n        type: `${GET_CART_ITEMS}_ERROR`\n      });\n    });\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getCartItems\n});\n\n//# sourceURL=webpack://sample-ssr-app/./src/Store/cart-action.js?");

/***/ }),

/***/ "./src/Store/cart-reducer.js":
/*!***********************************!*\
  !*** ./src/Store/cart-reducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cart)\n/* harmony export */ });\n/* harmony import */ var _cart_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-action.js */ \"./src/Store/cart-action.js\");\n\nfunction cart() {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _cart_action_js__WEBPACK_IMPORTED_MODULE_0__.GET_CART_ITEMS:\n      return {\n        ...state,\n        items: action.data\n      };\n    case `${_cart_action_js__WEBPACK_IMPORTED_MODULE_0__.GET_CART_ITEMS}_ERROR`:\n      return state;\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack://sample-ssr-app/./src/Store/cart-reducer.js?");

/***/ }),

/***/ "./src/Store/index.js":
/*!****************************!*\
  !*** ./src/Store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configureStore\": () => (/* binding */ configureStore)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-reducer */ \"./src/Store/cart-reducer.js\");\n\n\n\nfunction configureStore() {\n  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  const middleware = [(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())];\n  let newCompose;\n  if (typeof window !== 'undefined') {\n    newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;\n  }\n  const composeEnhancers = newCompose || redux__WEBPACK_IMPORTED_MODULE_0__.compose;\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n  return store;\n}\n\n//# sourceURL=webpack://sample-ssr-app/./src/Store/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction HomePage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"home page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/product\"\n  }, \"Product Page\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/static-content\"\n  }, \"Static page\")));\n}\n\n//# sourceURL=webpack://sample-ssr-app/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/product.js":
/*!******************************!*\
  !*** ./src/pages/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProductPage() {\n  const items = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.items);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\"\n  }, \"back to home\"), items?.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h6\", {\n      key: `item-sx-${index}`\n    }, item.name);\n  }));\n}\n\n//# sourceURL=webpack://sample-ssr-app/./src/pages/product.js?");

/***/ }),

/***/ "./src/pages/static.js":
/*!*****************************!*\
  !*** ./src/pages/static.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction StaticPage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \" back to home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Static content\"));\n}\n\n//# sourceURL=webpack://sample-ssr-app/./src/pages/static.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;