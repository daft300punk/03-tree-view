import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import generateTree from './generateTree';
import Node from './containers/Node';
import logger from 'redux-logger';

const tree = generateTree();
const store = createStore(reducers, tree, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Node id={0} />
  </Provider>,
  document.getElementById('root')
);