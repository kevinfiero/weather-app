import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../containers/home/Home'
import Zip from '../../containers/zip/Zip'

export default function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component = { Home } /> 
        <Route exact path="/zip/:id" component = { Zip } /> 
      </Switch>
    </Router>
    </>
  )
}

