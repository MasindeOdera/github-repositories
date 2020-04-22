import React, { Component } from 'react';
import '../App.css';

class Accounts extends Component {
    render() {
        console.log("this.props in Accounts: ", this.props);
        const {repos} = this.props;
        let account = (<table>
            <tbody>
            <tr>
                <td><img src={repos.owner.avatar_url} alt="img" style={repoImage} /></td>
                <td style={{fontSize: '0.86rem',}}>{repos.owner.login}</td>
                <td>{repos.description}</td>
                <td>{repos.created_at.slice(0,10)}</td>
                <td>{repos.watchers}</td>
                <td>{String(repos.private)}</td>
            </tr>
            </tbody>
        </table>);

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
