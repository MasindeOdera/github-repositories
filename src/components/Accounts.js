import React, { Component } from 'react';


class Accounts extends Component {
    render() {
        console.log("this.props in Accounts: ", this.props);
        const {repos} = this.props;
        let account = (<div style={repoStyle}>
            <div style={border} className="Card">
                <div style={clearfix}>
                <img src={repos.owner.avatar_url} alt="img" style={repoImage} />
                <h3 style={{fontSize: '0.86rem',}}>{repos.title}</h3>
                <h4 style={repoAuthor}>- {repos.owner.login}</h4>
                <p style={repoDescriton}>{repos.description}</p>
                </div>
            </div>
        </div>);

        return (
            <React.Fragment>
                {account}
            </React.Fragment>
        )
    }
}

const repoStyle = {
    color: '#000',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
    gridGap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
}

const border = {
    padding: '1.2rem 10px',
    marginTop: '20px',
    backgroundColor: '#ff0000',
}

const clearfix = {
    color: '#222',
    fontWeight: '500',
    textTransform: 'capitalize',
    fontSize: '1.1rem',
    textAlign: 'left',
    height: '310px',
    padding: '0.2rem',
    marginTop: '-20px',
}

const repoImage = {
    width: '10rem',
    // width: '100%',
    height: '10rem',
    objectFit: 'contain',
}

const repoAuthor = {
    margin: '2px',
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

const repoDescriton = {
    whiteSpace: 'nowrap',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

export default Accounts
