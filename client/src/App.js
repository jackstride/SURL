import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Private from './Pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Private route="/app" />
      </Switch>
    </Router>
  );
}

export default App;
