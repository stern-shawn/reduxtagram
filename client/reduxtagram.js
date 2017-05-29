import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import { Provider } from 'react-redux';
import Raven from 'raven-js';
import store, { history } from './store';
import { sentryUrl } from './data/config';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import css from './styles/style.styl'; // eslint-disable-line no-unused-vars

Raven.config(sentryUrl).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
