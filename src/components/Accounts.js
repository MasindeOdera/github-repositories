import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: this.props.repos,
        }
    }
    
    render() {
        const {repos} = this.props;
        let account = (
            <tr>
                <td>
                    <Link to={"/repo/" + repos.full_name } repos={repos}>
                        <img src={repos.owner.avatar_url} alt="img" style={repoImage} />
                    </Link>
                </td>
                <td>
                    <Link to={"/repo/" + repos.full_name } repos={repos}>
                        {repos.name}
                    </Link>                     
                </td>
                <td><Link to={"/repo/" + repos.full_name } repos={repos}>{repos.description}</Link></td>
                <td><Link to={"/repo/" + repos.full_name } repos={repos}>{repos.created_at.slice(0,10)}</Link></td>
                <td><Link to={"/repo/" + repos.full_name } repos={repos}>{repos.watchers}</Link></td>
                <td><Link to={"/repo/" + repos.full_name } repos={repos}>{String(repos.private)}</Link></td>
            </tr>);

        return (
            <React.Fragment>
                {account}
            </React.Fragment>
        )
    }
}

const repoImage = {
    width: '4rem',
    height: '4rem',
}

export default Accounts;
