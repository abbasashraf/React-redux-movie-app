import React, { Component } from 'react';
import '../App.css';
import MovieResults from './movieResult'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Favmovielist from './favlist'

class App extends Component {
  render() {

    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movies App</h1>
            <p>Don't you like movies</p>
          </div>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route exact path="/" component={MovieResults} />
              <Route path="/fav" component={Favmovielist} />
            </Switch>
          </Router>
        </div>

      </div>
    );
  }
}

export default App;
