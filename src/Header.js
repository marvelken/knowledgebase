import React from 'react';
import "./Header.css" ;

//follow the followinf steps:
//used rfc as a shortcut
//get an image from the net and resize with header.css
//add display flex to the text
export default function Header() {


  return (
    <div className='headercontainer'>
    <img src="https://pbs.twimg.com/profile_images/873413519189843968/vEbzRom2_400x400.jpg" alt="" srcset="" className='img' />
    <h2>Butter KnowledgeBase for building Apps</h2>
    </div>
  )
}
