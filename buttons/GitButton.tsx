"use client"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function GitButton() {
  const handleClick = () => {
    window.open('https://github.com', 'Noctis2003');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '8px',
        gap: '8px',
        transition: 'background-color 0.3s',
        fontWeight: 'bold',
      }}
      
    >
      <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20px' }} />
      Github
    </button>
  );
}

export default GitButton;
