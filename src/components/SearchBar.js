import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuery, fetchRepos } from '../actions/reposActions';
import '../App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { query: this.props.query};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        e.preventDefault();
        this.props.fetchQuery(e.target.value);
        console.log(e.target.value);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchRepos(this.props.query);
        console.log(this.props.query);
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
}

const mapStateToProps = state => ({
    query: state.repos.query,
});

export default connect(mapStateToProps, { fetchQuery, fetchRepos })(SearchBar);