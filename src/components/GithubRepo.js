import React, { Component, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions/reposActions';
import '../App.css';

const Accounts = React.lazy(() => import('./Accounts'));

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
        let miliseconds = Math.round(performance.getEntries('measure')[0].duration);
        let content = '';
        content = repos.length > 0 ? repos.map((repos, index) => <Accounts key={index} repos={repos} />) : null;
        const header = repos.length > 0 ? <thead><tr><th>Avatar</th><th>Name</th><th>Description</th><th>Created</th><th>Watchers</th><th>Private</th></tr></thead> : null;

        return (
            <div>
                <Suspense fallback={<div>Loading, please wait...</div>}>
                    { query ? <h1 style={{margin: '10px 0px 10px 0px',}}>Displaying Repositories with "{query}"</h1> : null}
                    {content ? <span>Duration approximately {miliseconds}ms</span> : null}
                    <table  className="Account">
                        {header}
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                </Suspense>
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
