import React from 'react';
import { render } from 'react-dom';
import Main from './Components/Main';
import css from './styles/style.styl';

import Single from './Components/Single';
import PhotoGrid from './Components/PhotoGrid';

import {Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
          <IndexRoute component={PhotoGrid}></IndexRoute>
          <Route path="/view/:postId" component={Single}></Route>
      </Route>
  </Router>
);

render(router, document.getElementById('root'));