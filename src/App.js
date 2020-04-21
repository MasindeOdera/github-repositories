import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GithubRepo from './components/GithubRepo';
import './App.css';
import { Provider } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import store from './store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <h1>Explore Github Repositories</h1>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/" component={GithubRepo} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
