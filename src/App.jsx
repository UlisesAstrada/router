import React from 'react'
import Base from './components/Base'
import Inicio from './components/Inicio'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/inicio'>
          <Inicio />
        </Route>
        <Route path="/">
          <Base />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
