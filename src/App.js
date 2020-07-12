import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from './modules/Dashboard/Dashboard';
import Header from './common/Header/Header';
import Matches from './modules/Dashboard/Matches/Matches';

class App extends Component {

  headerRoute = ({Component, path, exact}) => <Route path={path} exact={exact} render={() => {
    return <>
      <Header />
      <div className="my-4" />
      {Component && <Component />}
    </>;
  }} />;

  render() {
    return <Router>
      <Switch>
        <this.headerRoute Component={Dashboard} path={'/'} exact={true} />
        <this.headerRoute Component={Matches} path={'/matches'} exact={true} />

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>


    </Router>;

  }

}

export default App;
