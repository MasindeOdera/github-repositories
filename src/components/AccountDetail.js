import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeDetail, findUser } from '../actions/reposActions';
import PropTypes from 'prop-types';
import '../AccountDetail.css';
import { Link } from 'react-router-dom';

class AccountDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: [],
            repos: this.props.repos,
            userData: [],
        };
    }

    componentDidMount() {
        // let user = this.props.match.params.id;
        // this.props.findUser(user);
        // this.props.storeDetail();
        // this.setState({user: this.props.user[0]});

        //ran out of time, so did the following:
        const params = this.props.match.params;

        fetch(`https://api.github.com/users/${params.owner}`)
            .then(res => res.json())
            .then(data =>{
                this.setState({userData: data});
            });
    }

    render() {
        console.log(this.state.userData);
        const detail = this.state.userData;
        function openTab() {
            window.open(detail.html_url);
          };
        
        let content = [];

        content = (
            <React.Fragment>
                <Link  to={"/"}><span>Back</span></Link>
                <div className="card">
                    <img src={detail.avatar_url} alt="img" style={{width:'100%'}} />
                    <h4>Name: {detail.name}</h4>
                    <h4>Login: {detail.login}</h4>
                    <p>Bio: {detail.bio}</p>
                    <p>Location: {detail.location}</p>
                    <p>Following: {detail.following}</p>
                    <p>Followers: {detail.followers}</p>
                    <Link to={""} onClick={openTab}>
                        <p><button>{detail.name}'s' Github Account</button></p>
                    </Link>
                </div>  
            </React.Fragment>);

        let detailView = this.state.userData ? content : null; 

        return (
            <React.Fragment>
                {detailView}
            </React.Fragment>
        )
    }
}

AccountDetail.prototypes = {
    storeDetail: PropTypes.func.isRequired,
    findUser: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    user: state.repos.user,  
    repos: state.repos.items,  
});

export default connect(mapStateToProps, { storeDetail, findUser })(AccountDetail);
