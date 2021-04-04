import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '@components/Nav';
import TaskOne from '@components/taskone/TaskOne';
import TaskTwo from '@components/tasktwo/TaskTwo';
import TaskTwoSolution from '@components/tasktwo/TaskTwoSolution';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route
        path="/"
        exact
        component={TaskOne}
      />
      <Route
        path="/task-two"
        component={TaskTwo}
      />
      <Route
        path="/task-two-solution"
        component={TaskTwoSolution}
      />
    </Switch>
  </Router>
);

export default App;
