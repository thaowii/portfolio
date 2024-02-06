import React from 'react';
import './ProjectsPage.css';

export const ProjectsContent: React.FC = () => {

    return (
        <div className='projectscontent'>
            <h1>projects</h1>
            <h1>ratemycse</h1>
            <ProjectCard />
        </div>
    );
}

export const ProjectCard: React.FC = () => {

    return (
        <div className='projectcard'>

        </div>
    );
}