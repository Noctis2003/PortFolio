"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function GitButton() {
  
  const handleClick = () => {
    // Redirect to the desired URL, for example to GitHub
    window.open('https://github.com', 'Noctis2003'); // Open GitHub in a new tab
  };

  return (
    <button 
      onClick={handleClick} // Add the onClick event handler
      className="flex font-bold items-center px-2 py-2 bg-black gap-2 text-white rounded-md hover:bg-slate-800 transition">
      <FontAwesomeIcon icon={faGithub} className="mx- size-5" />
      Github
    </button>
  );
}

export default GitButton;
