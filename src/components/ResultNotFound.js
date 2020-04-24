import React, { Component } from 'react';
import resultNotFound from '../gif/resultNotFound.gif';

export class ResultNotFound extends Component {
    render() {
        return (
            <div>
                <h4 style={{margin: '4px',}}>Sorry, no results found. Please adjust search.</h4>
                <img 
                    src={resultNotFound}
                    style={{ width: '200px', margin: 'auto', display: 'block' }}
                    alt="Loading..."
                />      
            </div>
        )
    }
}

export default ResultNotFound
