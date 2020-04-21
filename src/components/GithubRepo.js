import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/reposActions';

export class GithubRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: this.props.repos,
        }
    }

    componentDidMount() {
        this.setState({repos: this.props.repos});
    }

    render() {
        const {query} = this.props;
        console.log("props: ", this.props);
        console.log("state: ", this.state);
        return (
            <div>
                { query ? <h1>Repositories with {query}</h1> : null}
            </div>
        )
    }
}

GithubRepo.prototypes = {
    fetchRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    repos: state.repos.items,
    query: state.repos.query,
});

export default connect(mapStateToProps, { fetchRepos })(GithubRepo);
