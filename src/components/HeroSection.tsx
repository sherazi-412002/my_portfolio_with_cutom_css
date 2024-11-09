'use client'
import React from 'react';
import Image from 'next/image'
import profile from '../public/port.jpg';
import { FaGithub } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import Link from 'next/link';
import Typed from 'typed.js';


function HeroSection() {
   
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","Bakend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
    
      typed.destroy();
    };
  }, []);





  return (
    <div>
        <section className='heroSection'>

            <div className='contentWrapper'>
                <p className='firstPara'>Hello, Its Me</p>
                <p className='secondPara'>Syed Shoaib Sherazi</p>
                <p className='thirdPara'>And I am a <span ref={el}></span></p><br />
                <div className='links'>
                <div className='btnWrapper'>
                    <Link href={'https://hackathons-gamma.vercel.app/'}><button className='Btn'>View CV</button></Link>
                    <Link href={'//contact'}><button className='Btn'> Contact Info</button></Link>
                </div>
                <div className= 'iconWrapper slideTopBtn'>
                  <Link href={'https://github.com/sherazi-412002'}><FaGithub size={50} color='#0ef' className='icon'/></Link>
                  <Link href={'https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/'}><RiLinkedinFill size={50} color='#0ef' className='icon' /></Link>
                </div>
                </div>
            </div>

            <div className='ImgWrapper'>
                <Image src={profile} alt='profilePic' height={1000} width={1000} className='heroSectionImg' />

            </div>
        </section>


    </div>
  )
}

export default HeroSection