import React, { Component, Suspense } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos, updateTotalCount } from '../actions/reposActions';
import '../App.css';

const Accounts = React.lazy(() => import('./Accounts'));
const ResultNotFound = React.lazy(() => import('./ResultNotFound'));

export class GithubRepo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: this.props.repos,
            totalCount: this.props.totalCount,
            loading: this.props.loading,
            totalPages: this.props.totalPages,
            currentPage: this.props.currentPage,
        }
    }

    componentDidMount() {
        this.setState({repos: this.props.repos});
        this.setState({totalCount: this.props.totalCount});

        // const getPagesCount = (total, denominator) => {
        //     total = this.props.totalCount;
        //     denominator = 100;
        //     const divisible = total % denominator === 0;
        //     const valueToBeAdded = divisible ? 0 : 1;
        //     let totalPages = Math.floor(total / denominator) + valueToBeAdded;
        //     this.setState({totalPages: totalPages});
        //     return Math.floor(total / denominator) + valueToBeAdded;
        // };
    }

    render() {
        // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        const {query, repos, totalCount, loading} = this.props;
        let miliseconds = Math.round(performance.getEntries('measure')[0].duration);
        let content = '';
        //If loading is true, then content and header should not be visible.
        content = repos.length > 0 && !loading ? repos.map((repos, index) => <Accounts key={index} repos={repos} />) : null;
        const header = repos.length > 0 && !loading ? <thead><tr><th>Avatar</th><th>Name</th><th>Description</th><th>Created</th><th>Watchers</th><th>Private</th></tr></thead> : null;

        return (
            <div>
                <Suspense fallback={<div>Loading, please wait...</div>}>
                    {/* The h1 is only displayed once the user types */}
                    { query ? <h1 style={{margin: '10px 0px 10px 0px',}}>Displaying Repositories with "{query}"</h1> : null}
                    {/* The Spinner is only visible when loading is true */}
                    {loading ? <Spinner /> : null}
                    {content && !loading ? <span>Duration approximately {miliseconds}ms</span> : null}
                    <table  className="Account">
                        {header}
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                    {totalCount === 0 && !loading ? <ResultNotFound /> : null}
                </Suspense>
            </div>
        )
    }
}

GithubRepo.prototypes = {
    fetchRepos: PropTypes.func.isRequired,
    updateTotalCount: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    repos: state.repos.items,
    query: state.repos.query,
    totalCount: state.repos.totalCount,
    loading: state.repos.loading,
    totalPages: state.repos.totalPages,
    currentPage: state.repos.currentPage,
});

export default connect(mapStateToProps, { fetchRepos, updateTotalCount })(GithubRepo);
