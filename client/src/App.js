import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Private from './Pages/ProtectedRoute';
import Logout from './Pages/Logout';
import Redirect from './Pages/Redirect';

// Web Applicaiton
import WebApplication from './Components/Application/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/social" component={Redirect} />
        <Route exact path="/" component={Home} />
        <Private path="/app">
          <WebApplication />
        </Private>
      </Switch>
    </Router>
  );
}

export default App;
