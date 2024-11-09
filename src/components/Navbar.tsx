'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



function Navbar() {

  const [isClick,setisClick] = useState(false)

  const toggleNavbar = ():void => {
    setisClick (!isClick)
  }
  return (
    <div>

        <nav className='navBar'>
            <div className='logo'>SYED SHOAIB SHERAZI</div>
            <div>
                <ul className= 'buttonWrapper slideTop'>
                   <Link href={'/'}><li   className='navBarButton'>Home</li></Link>
                    <Link href={'/about'}><li  className='navBarButton'>About</li></Link>
                    <Link href={'/projects'}><li  className='navBarButton'>Projects</li></Link>
                    <Link href={'/contact'}><li className='navBarButton'>Contact</li></Link>
                </ul>
            </div>
        

        {/* Navbar for Small devices */}
            <div className='smallNavBar'>

            <div onClick={toggleNavbar}>
                {isClick?(<div><RxCross2 color='#0ef' size={35} /></div>):(<div><GiHamburgerMenu size={35} color='#0ef' /></div>)}
                
            </div >
            </div>
           </nav>

        {isClick &&  (
            <div className='onClick'>
               <ul className='smallNavWrapper'>
                <Link href={'/'}><li className='smallNavBarBtn' >Home</li></Link>
                <Link href={'/about'}><li className='smallNavBarBtn ' >About</li></Link>
                <Link href={'/projects'}><li className='smallNavBarBtn' >Projects</li></Link>
                <Link href={'/contact'}><li className='smallNavBarBtn' >Contact</li></Link>
                </ul>
            </div>

            )}

    </div>
  )
}

export default Navbar