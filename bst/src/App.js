import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Home} from './components/Home';
import {Departments} from './components/Departments';
import {Employees} from './components/Employees';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/department' component={Departments} exact/>
        <Route path='/employee' component={Employees} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
