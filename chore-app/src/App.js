import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ChoreDashboard from "./components/chore-dashboard";
import EditChore from "./components/edit-chore";
import CreateChore from "./components/create-chore";
class App extends Component {
  render() {
    return(
      <Router>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="navbar-brand"><h2>Chore Tracker App</h2></Link>
              <div className="navbar-right">
                <ul className="nav navbar-nav">
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Add Chore</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">View Chores</Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route path="/" exact component={ChoreDashboard} />
            <Route path="/edit/:id" component={EditChore} />
            <Route path="/create" component={CreateChore} />
            
        </div>
      </Router>
    );
  }
}


export default App;
