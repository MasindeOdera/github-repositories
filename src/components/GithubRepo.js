import React, { Component, Suspense } from 'react';
import Spinner from './Spinner';
import LandingPage from './LandingPage';
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRepos, updateTotalCount, setCurrentPage } from '../actions/reposActions';
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
            activePage: this.props.activePage,
        }
    }

    componentDidMount() {
        this.setState({repos: this.props.repos});
        this.setState({totalCount: this.props.totalCount});
        this.props.updateTotalCount(this.props.totalCount);
    }

    handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
        this.setState({currentPage: pageNumber});
        this.props.setCurrentPage(pageNumber);
        this.props.fetchRepos(this.props.currentPage, this.props.query);
      }

    render() {
        // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        const {query, repos, loading, totalCount} = this.props;

        let miliseconds = Math.round(performance.getEntries('measure')[0].duration);
        let content = '';
        //If loading is true, then content and header should not be visible.
        content = repos.length > 0 && !loading ? repos.map((repos, index) => <Accounts key={index} repos={repos} />) : null;
        const header = repos.length > 0 && !loading ? <thead><tr><th>Avatar</th><th>Name</th><th>Description</th><th>Created</th><th>Watchers</th><th>Private</th></tr></thead> : null;
        const pagination = repos.length > 0 && !loading ? 
        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={100}
            totalItemsCount={totalCount}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
        /> : null;

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
                    {pagination}
                    {/* If no accounts are returned, but there has been a serach queried, then show no results found. */}
                    {totalCount === 0 && !loading && query.length > 0 ? <ResultNotFound /> : null}
                    {/* Just a little gif to get the party started */}
                    {totalCount === 0 && !loading && query.length === 0 ? <LandingPage /> : null}
                </Suspense>
            </div>
        )
    }
}

GithubRepo.prototypes = {
    fetchRepos: PropTypes.func.isRequired,
    updateTotalCount: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { fetchRepos, updateTotalCount, setCurrentPage })(GithubRepo);
