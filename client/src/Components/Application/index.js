import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './SideNavigation/Navigation.js';
import { connect } from 'react-redux';

// Main UI
import AppUI from './MainUI/index';

const ApplicaitonHome = () => {
  return (
    <div className="app_container">
      <Navigation />
      <div className="application_content">
        <Switch>
          <Route path="/app/profile" />
          <Route exact path="/app" component={AppUI} />
        </Switch>
      </div>
    </div>
  );
};

export default ApplicaitonHome;
