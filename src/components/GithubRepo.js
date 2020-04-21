import React, { Component } from 'react';
import Accounts from './Accounts';
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
        const {query, repos} = this.props;
        console.log("props: ", this.props);
        console.log("repos: ", repos);
        let content = '';
        content = repos.length > 0 ? repos.map((repos, index) => <Accounts key={index} repos={repos} />) : null;

        return (
            <div>
                { query ? <h1 style={{margin: '10px 0px 10px 0px',}}>Displaying Repositories with "{query}"</h1> : null}
                {content}
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
