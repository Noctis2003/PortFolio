"use client";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faDownload ,faMailForward, fas} from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons/faMailBulk";
function MailButton() {
  
  return (
    <a href="mailto:noctis.hive@gmail.com">
   <button 
             className="flex font-bold gap-2 font-mono items-center px-2 py-2 text-black rounded-md border border-slate-600 border-opacity-50">
           <FontAwesomeIcon icon={faMailBulk} className="mr-2 size-5 " />
         Mail me
           </button>
           </a>
  )
}

export default MailButton