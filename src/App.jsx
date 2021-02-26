import React from 'react'
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
          Estás en el inicio
        </Route>
        <Route path="/">
          Esta es la URL base
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
