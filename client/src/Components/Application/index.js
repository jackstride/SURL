import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './SideNavigation/Navigation.js';
import Link from './SideNavigation/Links';

const ApplicaitonHome = () => {
  return (
    <div className="app_container">
      <Navigation />
      <div className="application_content">
        <Switch>
          <Route path="/app/profile">
            <Test />
          </Route>
          <Route exact path="/app" component={Link} />
        </Switch>
      </div>
    </div>
  );
};

export default ApplicaitonHome;

const Test = () => {
  return <h1> Hello </h1>;
};
