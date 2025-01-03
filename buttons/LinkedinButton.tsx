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
       onClick={handleClick} // Add the onClick event handler
       className="px-2 font-bold bg-black py-2 border-red-30 text-white gap-2 rounded-md flex flex-row justify-evenly items-center  ">
       <FontAwesomeIcon icon={faLinkedin} className="mx-5 size-7" />
       
       Linkedin
     </button>
  );
}

export default LinkedinButton;