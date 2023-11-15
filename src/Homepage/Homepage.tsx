import React from 'react';
import picofme from './images/peonies.jpeg';

export const HomeContents: React.FC = () => {

    return (
        <div className='homecontents'>
            <div className='intro-flexbox'>
                <div className='hellobox'>
                    <p>Hi there!</p>
                </div>
                <h1 className='intro'>
                    I'm Thao, a 3rd year studying computer science at the University of Washington!
                </h1>
                <img src={picofme} alt='me' height='50%' width='50%'/>
            </div>
        </div>
    );
}