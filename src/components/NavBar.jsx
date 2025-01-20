import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";


const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=' text-white mb-20 flex items-center justify-between px-2 py-5 '>
      <div className='flex flex-shrink-0 items-center'>
        {/* <a href='#'>Kavya</a> */}<p>KS</p>
      </div>
      <div className='hidden md:block'>
        <ul className='flex items-center justify-center gap-4 '>
          <li><a href='/'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#skill'>Skills</a></li>
          <li><a href='/#project'>Project</a></li>
          <li><a href='/#resume'>Resume</a></li>
          <li><a href='/#contact'>Contact</a></li>
        </ul>
      </div>

    { toggleMenu &&
      <div className=' block md:hidden'>
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex-col items-center justify-center gap-4 mobile-nav pt-1'>
          <li><a href='#'>Home</a></li>
          <li><a href='/#about'>About</a></li>
          <li><a href='/#skill'>Skills</a></li>
          <li><a href='/#project'>Project</a></li>
          <li><a href='/#resume'>Resume</a></li>
          <li><a href='/#contact'>Contact</a></li>
        </ul>
      </div>
    }

      <button onClick={ ()=>setToggleMenu(!toggleMenu) } className='block md:hidden'><FaBars className='text-white w-6 h-6' /></button>
    </nav>
  )
}

export default NavBar
