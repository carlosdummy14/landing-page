import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;