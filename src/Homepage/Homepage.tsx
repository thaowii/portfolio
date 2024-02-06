import React from 'react';
import picofme from './images/peonies.jpeg';
import './Homepage.css';

export const HomeContents: React.FC = () => {

    return (
        <div className='homecontents'>
            <div className='home-flexbox'>
                <div className='intro-flexbox'>
                    <div className='hellobox'>
                        <p>Hi there!</p>
                    </div>
                    <h1 className='intro'>
                        I'm Thao, <br/>
                        a 3rd year studying computer science at the University of Washington!
                    </h1>
                </div>
                <img className='picofme' src={picofme} alt='me'/>
            </div>
        </div>
    );
}