"use client";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function LinkedinButton() {
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/manjot-singh-1571b325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        backgroundColor: '#0072b1',
        color: 'white',
       
        borderRadius: '8px',
        gap: '8px',
        fontWeight: 'bold',
        justifyContent: 'space-evenly',
        transition: 'background-color 0.3s',
      }}
  
      
    >
      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '18px' }} />
      Linkedin
    </button>
  );
}

export default LinkedinButton;