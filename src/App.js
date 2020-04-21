import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GithubRepo from './components/GithubRepo';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Explore Github Repositories</h1>
        <SearchBar />
        <GithubRepo />
      </div>
    );
  }
}

export default App;
