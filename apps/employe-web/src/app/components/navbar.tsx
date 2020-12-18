import React, { Component } from 'react';
import '../styles/navbar.scss';
import Employe from '../pages/employe';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Attendance from '../pages/attendance';

class Navbar extends Component {
  render(){
    return(
      <Router>
        <div className="navbar-wrapper">
          <div className="nav-logo">
            <h1>Navbar</h1>
          </div>
          <div className="nav-menu">
            <ul>
              <a href="/employe">
                <li>Employe</li>
              </a>
              <a href='/attendance'>
                <li>Attendance</li>
              </a>
                <li>Setting</li>  
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}

export default Navbar