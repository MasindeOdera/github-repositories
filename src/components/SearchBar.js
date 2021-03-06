import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuery, fetchRepos, setLoading } from '../actions/reposActions';
import '../App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { query: this.props.query, currentPage: this.props.currentPage};
        this.timeout =  0;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        e.preventDefault();
        this.props.fetchQuery(e.target.value);
        this.props.setLoading();

        //This allows the user to search without hitting submit.
        let searchText = e.target.value;
        let currentPage = this.props.currentPage;
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.fetchRepos(currentPage, searchText);
        }, 600);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.setLoading();
        // only fetchRepos if a query is defined.
        if(this.props.query !== 'undefined') {
            this.props.fetchRepos(this.props.currentPage, this.props.query);
        }
    }

    render() {
        return (
            <React.Fragment>
                <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Search github repositories..." 
                        style={{flex: '10', padding: '5px'}}
                        value = {this.state.search}
                        onChange = {this.handleChange}
                        autoComplete="off"
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn"
                        style={{flex: '1'}}
                    />
                </form>
            </React.Fragment>
        )
    }
}

SearchBar.protoTypes = {
    fetchQuery: PropTypes.func.isRequired,
    fetchRepos: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    query: state.repos.query,
    currentPage: state.repos.currentPage,
});

export default connect(mapStateToProps, { fetchQuery, fetchRepos, setLoading })(SearchBar);
