
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Provider from './Context/Provider';
import Details from './Pages/Details';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/details/:name" component={ Details } />
      </Switch>
    </Provider>
  );
}

export default App;