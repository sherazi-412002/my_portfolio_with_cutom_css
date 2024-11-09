import React from 'react';
import profile from '@/public/profilePic.jpg';
import Image from 'next/image';
import { IoRibbon } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";

function About() {
  return (
    <div className='aboutSection'>
        
        <p className='mainPara'>Get To Know More</p>
        <h1 className='mainHeading'>About Me</h1>

        <div className='aboutSubContainer'>
            <div className='aboutImgWrapper'>
                <Image src={profile} alt='profile' width={1000} height={1000} className='aboutImg'/>
 
            </div>

            <div className='aboutContent'>

                <div className='aboutBoxes'>
                    <div className='boxContent'>
                        <div><IoRibbon size={30} /></div>
                        <h2 className='aboutParaHeading'>Experience</h2>
                        <p className='aboutPara'>1 + years</p>
                        <p className='aboutPara'>Teacher</p>
                        <p className='aboutPara'>Allama Iqbal Sec School | Sep-21 to Nov-23</p>
                    </div>
                    <div className='boxContent'>
                        <div><MdCastForEducation size={30} /></div>
                        <h2 className='aboutParaHeading'>Education</h2>
                        <p className='aboutPara'>Matric in Science , 2018</p>
                        <p className='aboutPara'>Intermediate in Medical , 2020</p>
                        <p className='aboutPara'>Bachelor of Science in Zoology , Continue</p>
                    </div>
                </div>

                <div className='aboutText'>
                    <p>Hi, I am a web developer  and a growing passion for front-end development. Currently, I am pursuing a 
                        BS in Zoology, but alongside my studies, I have developed a strong interest in creating responsive and intuitive user interfaces.</p>
                    <p >I have gained proficiency in HTML, CSS, and TypeScript, and have worked with Next.js to build modern web applications. My 
                        focus is on UI/UX design and ensuring websites are responsive across all devices, creating seamless user experiences.</p>
                    <p>I love the way development combines creativity with problem-solving, and I am excited to continue learning and growing as a developer
                        while finishing my degree. I look forward to building more projects that reflect both my love for technology and the natural world!</p>
                </div>

            </div>
        </div>

    
    </div>
  )
}

export default About