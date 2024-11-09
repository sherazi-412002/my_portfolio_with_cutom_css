'use client';

import React, { FormEvent, useState } from "react";
import Swal from 'sweetalert2';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";


function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "97e80800-f155-4512-86b8-c34911652ab9",
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }),
          });
    
          const result = await response.json();
    
          if (result.success) {
            Swal.fire({
              title: "Success!",
              text: "Message Sent Succesesfully!",
              icon: "success"
            });
          } else {
            console.error("Error:", result);
          }
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
    
      return (
        <div className='contactSection'>

            
            <p className='mainPara'>Get In Touch</p>
            <h2 className='mainHeading'>Contact Me</h2>

            
             <div className='contactBoxes'>
                
                <div className='firstBox'>

                    <div className='contactIcons'><Link href={'mailto:syedshoaibsherazi412002@gmail.com'}> <MdEmail size={40}/> </Link>
                    <p className='emailText'>syedshoaibsherazi412002@gmail.com</p></div>
                    <div className='contactIcons'><Link href={'https://www.linkedin.com/in/syed-shoaib-sberazi/'}> <FaLinkedin size={40}/> </Link>
                    <p className='iconText'>LinkedIn Id</p></div>
                    <div className='contactIcons'><Link href={'https://www.linkedin.com/in/syed-shoaib-sberazi-3638822b4/'}> < FaGithub size={40}/> </Link>
                    <p className='iconText'>Github Id</p></div>


                </div>
                
              
    
                <form onSubmit={handleSubmit} className='contactForm'>
                    <h2 className='contactHeading'>Contact Form</h2>
                    
                    <label>Full Name</label>
                    <input type='text'name='name'  value={formData.name} onChange={handleInputChange} placeholder='Enter Your Name' required />
                    
    
                    
                    <label>Email Adress</label>
                    <input type='email' name='email' value={formData.email} onChange={handleInputChange}  placeholder='Enter Your Email' required />
                    
    
                  
                    <label>Your Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder='Enter Your Message' required></textarea>
                    
    
                    <button type='submit' >Send Message</button>

                </form>

             </div>
             <br />
        </div>
      )
     
}

export default Contact