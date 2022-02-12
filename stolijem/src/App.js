import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import {Techno} from './components/Techno';
import {Contact} from './components/Contact';
import {Login} from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/technologie' component={Techno}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/login' component={Login}/>
            <Route component={ErrorPage}/>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
