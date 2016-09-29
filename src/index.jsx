'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import StatusPage from './components/StatusPage.jsx';

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={StatusPage}>
         <Route path="/statusy-mini.html" component={StatusPage}/>
      </Route>
   </Router>
), document.getElementById('statusy-react'));
