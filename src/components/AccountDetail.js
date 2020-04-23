import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos, fetchDetail, setLoading } from '../actions/reposActions';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

export class AccountDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            detail: this.props.detail,
            repos: this.props.repos,
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        console.log("this.props", this.props);
        // this.props.setLoading();
        let a = this.props.repos.items;
        console.log(a);
        let idToSearch = this.props.match.params.id;
          
        function b(idToSearch) {
            return a.filter(detail => {
                return detail.id === idToSearch
            })
        };
        
        const test = b(idToSearch);
        console.log(test);
        this.props.fetchDetail(test[0]);
        this.setState({detail: test[0]});
    }
    render() {
        console.log("this.props in AccountDetails: ", this.props);
        console.log("this.state in AccountDetails: ", this.state);
        const {repos} = this.props;
        console.log("this.props.detail: ", this.props.detail);
        console.log("repos: ", repos);

        // function openTab() {
        //     window.open(repos.owner.html_url);
        //   };

        let content = (
            <React.Fragment>
                <Link  to={"/"}><span>Back</span></Link>hi
                
            </React.Fragment>);
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}

// const border = {
//     padding: '1.2rem 10px',
//     marginTop: '20px',
//     height: 'auto',
// }

// const clearfix = {
//     color: '#222',
//     fontWeight: '500',
//     textTransform: 'capitalize',
//     fontSize: '1.1rem',
//     textAlign: 'left',
//     padding: '0.2rem',
//     marginTop: '-20px',
//     height: 'inherit',
// }

// const articleImage = {
//     width: '100%',
//     height: '14rem',
//     objectFit: 'cover',
// }

// const articleAuthor = {
//     margin: '2px',
//     width: '100%',
// }

// const articleContent = {
//     width: '80%',
// }

AccountDetail.prototypes = {
    // fetchRepos: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    detail: state.repos.detail,
    repos: state.repos.items,
});

export default connect(mapStateToProps, { fetchRepos, fetchDetail, setLoading })(AccountDetail);

// export default AccountDetail
