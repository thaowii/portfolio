import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<LayoutProps> = ( props: LayoutProps ) => {
    
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio');
  }

  const handleProj = () => {
    navigate('/projects');
  }

  const handleAbout = () => {
    navigate('/about');
  }

  return (
      <div className='baselayout'>
        <div className='navbar'>
          <h2 className='navbutton' onClick={ handleClick }>Home</h2>
          <h2 className='navbutton' onClick={ handleProj }>Projects</h2>
          <h2 className='navbutton' onClick={ handleAbout }>About</h2>
        </div>
        {props.children}
      </div>
    );
}