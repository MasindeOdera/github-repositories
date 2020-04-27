import React, { Component } from 'react';
import landingPage from '../gif/landingPage.gif';

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <h4 style={{margin: '4px',}}>"The new Google!" -Larry Page.</h4>
                <h4 style={{margin: '4px',}}>"New Rival!" -Sergey Brin</h4>
                <img 
                    src={landingPage}
                    style={{ width: '40%', margin: 'auto', display: 'block' }}
                    alt="Loading..."
                />      
            </div>
        )
    }
}

export default LandingPage
