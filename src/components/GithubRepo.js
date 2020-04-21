import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { sth } from '../actions/repoActions';

export class GithubRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        }
    }

    getDerivedState() {
        //somethign here?
    }

    render() {
        return (
            <div>
                <h1>Repositories with "search"</h1>
            </div>
        )
    }
}

export default GithubRepo
