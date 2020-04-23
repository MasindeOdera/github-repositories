import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, findUser } from '../actions/reposActions';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

export class AccountDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            detail: this.props.detail,
        };
    }

    componentDidMount() {
        let user = this.props.match.params.id;
        // console.log(user);
        // this.props.fetchDetail(user);
        this.props.findUser(user);
        this.setState({detail:this.props.detail});

        // let a = this.props.repos;
        // console.log(a);
          
        // function b(idToSearch) {
        //     return a.filter(detail => {
        //         return detail.id === idToSearch
        //     })
        // };
        
        // const test = b(idToSearch);
        // console.log(test);
        // this.props.fetchDetail(test[0]);
        // this.setState({detail: test[0]});
    }
    render() {
        
        const {detail} = this.props;
        console.log("this.props.detail: ", detail);

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

AccountDetail.prototypes = {
    fetchDetail: PropTypes.func.isRequired,
    findUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    detail: state.repos.detail,
    repos: state.repos.items,
});

export default connect(mapStateToProps, { fetchDetail, findUser })(AccountDetail);
