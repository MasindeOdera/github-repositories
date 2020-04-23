import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, findUser } from '../actions/reposActions';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: [],
        };
    }

    componentDidMount() {
        let user = this.props.match.params.id;
        // this.props.fetchDetail(user);
        this.props.findUser(user);
        this.props.fetchDetail();
        console.log(user);
        this.setState({user: this.props.user[0]});
        console.log(user, this.props.user);

        // let a = this.state.user;
        
        // function b(user) {
        //     return a.filter(item => {
        //         return item.user === user
        //     })
        // };
        
        // const test = b(user);
        // console.log(test);
    }
    render() {
        const {user} = this.props;
        console.log(this.props);
        console.log("this.props.user: ", user);
        let detail = this.props.user ? this.props.user : null;
        console.log(detail);

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
    user: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    user: state.repos.user,  
});

export default connect(mapStateToProps, { fetchDetail, findUser })(AccountDetail);
