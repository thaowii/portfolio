import React from 'react';
import {useNavigate} from 'react-router-dom';
import './BaseLayout.css';


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

  const handleHobbies = () => {
    navigate('/hobbies');
  }

  return (
      <div className='baselayout'>
        <div className='navbackground'/>
        <div className='navbar'>
          <h2 className='navbutton' onClick={ handleClick }>Home</h2>
          <h2 className='navbutton' onClick={ handleProj }>Projects</h2>
          <h2 className='navbutton' onClick={ handleHobbies }>Hobbies</h2>
        </div>
        {props.children}
      </div>
    );
}