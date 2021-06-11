import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home/Home'
import Zip from '../zip/Zip'

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

