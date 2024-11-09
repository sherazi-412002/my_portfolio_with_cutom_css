import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import resume from '@/public/resume.webp';
import zoology from '@/public/zoology.webp';
import architect from '@/public/architect.png';
import todo from '@/public/todo.jpeg';
import wordCounter from '@/public/wordsCounter.jpg';
import currencyConvertor from '@/public/currency.jpg';


function Projects() {

  return (

    <div className='projectsSection'>

      <p className='mainPara'>Browse My Recent</p>
      <h1 className='mainHeading'>Projects</h1>

      <div className='cardsWrapper'>

        {/* card01 */}
      
        <div className='cardContent'>

          <div> <Image src={resume} alt='resume' width={1000} height={1000} className='cardImg'/></div>
            <p className="cardTitle">Resume Builder</p>
          
            <div className='cardButtonWrapper'>

            <Link href={'https://github.com/sherazi-412002/Hackathons/tree/main/Hackathon-01/milestone04'}><button className='cardButton'>GitHub</button></Link>
            <Link href={'https://hackathons-1dgw.vercel.app/'}><button className='cardButton'>Live Demo</button></Link>
  
          </div>
        </div>


        {/* card02 */}

        <div className='cardContent'>
  
          <div> <Image src={zoology} alt='resume' width={1000} height={1000} className='cardImg'/></div>
            <p className='cardTitle'>Zoological Blogs Website</p>
          
            <div className='cardButtonWrapper'>

           <Link href={'https://github.com/sherazi-412002/assignment_04-and-05'}> <button className='cardButton'>GitHub</button></Link>
           <Link href={'https://assignment-04-and-05.vercel.app/'}><button className='cardButton'>Live Demo</button></Link>

          </div>  
        </div>


        {/* card03 */}


       <div className='cardContent'>

          <div> <Image src={architect} alt='resume' width={1000} height={1000} className='cardImg'/></div>
            <p className='cardTitle'>Architect Website</p>
          
            <div className='cardButtonWrapper'>
            <Link href={'https://github.com/sherazi-412002/first_next_app_from_figma_templet'}><button className='cardButton'>GitHub</button></Link>
            <Link href={'https://first-next-app-from-figma-templet.vercel.app/'}><button className='cardButton'>Live Demo</button></Link>
          
          </div>  
       </div>

       {/* card04 */}

       <div className='cardContent'>
  
          <div> <Image src={wordCounter} alt='resume' width={1000} height={1000} className='cardImg'/></div>
            <p className='cardTitle'>Word Counter</p>
          
            <div>

            <Link href={'https://github.com/sherazi-412002/word-counter'}><button className='cardButton2'>GitHub</button></Link>
            
          </div>  
       </div>

        {/* card05 */}

       <div className='cardContent'>

          <div> <Image src={currencyConvertor} alt='resume' width={1000} height={1000} className='cardImg'/></div>
            <p className='cardTitle'>Currency Convertor</p>
          
            <div>

            <Link href={'https://github.com/sherazi-412002/currency-convertor'}><button className='cardButton2'>GitHub</button></Link>
         
          </div>  
       </div>

         {/* card06 */}

       <div className='cardContent'>

          <div> <Image src={todo} alt='resume' width={1000} height={1000} className='cardImg'/></div>
            <p className='cardTitle'>Todo App</p>
          
            <div>

            <Link href={'https://github.com/sherazi-412002/updated-todo'}><button className='cardButton2'>GitHub</button></Link>
      
          </div>  
       </div>        
      </div>
      <br /> <br />

    </div>
  )
}

export default Projects