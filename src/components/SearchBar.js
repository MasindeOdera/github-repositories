import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchNews, searchNews, setLoading} from '../actions/newsActions';
import '../App.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { query: this.query, article: this.props.article};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        e.preventDefault();
        this.props.setLoading();
        this.props.searchNews(e.target.value);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.setLoading();
        this.props.fetchNews(this.props.query);
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

// SearchBar.protoTypes = {
//     fetchNews: PropTypes.func.isRequired,
//     searchNews: PropTypes.func.isRequired,
//     setLoading: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => ({
//     query: state.news.query,
// });

export default SearchBar
// export default connect(mapStateToProps, { fetchNews, searchNews, setLoading })(SearchBar);
