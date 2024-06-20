import React from 'react'
import { IoIosMail} from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <section className='flex flex-col justify-between items-center  text-white'>
      <h1 className='text-5xl p-[10px]  text-[#D6B69B] font-bold'>
        Get In Touch
      </h1>
      <div className='flex justify-evenly md:p-5 p-[5px] flex-col md:flex-row shadow-[10px_10px_68px_25px_rgba(112,112,80,0.3)] my-[5%] mx-[10%]'>
        <div className='md:w-[50%] leading-relaxed'>
           <div className='p-1'>
            <p className='md:p-3 font-bold'>Conatct Details</p>
           <p className='flex items-center p-3'><span className='me-5 text-3xl hover:text-[#D6B69B]'><IoIosMail/></span>Shrishtijain2101@gmail.com</p>
           <p className='flex items-center p-3'><span className='me-5 text-3xl hover:text-[#D6B69B]'><IoLocation/></span>Jaipur,Rajasthan</p>
           </div>
           
           <div className='social-links p-1'>
           <p className='md:p-3 font-bold'>Social</p>
              <div c className=' flex p-3'>
              <a href="https://github.com/shrishti2101" className='me-5'><span className='text-3xl hover:text-[#D6B69B]'><FaSquareGithub /></span></a>
              <a href="https://www.linkedin.com/in/shrishti-jain21/"><span  className='text-3xl hover:text-[#D6B69B]'><FaLinkedin /></span></a>
              </div>
           </div>
        </div>
        <div className='md:w-[50%]'>
          <form className='leading-12'  >
            <input type="text" name="name" id="" placeholder='Name' className=' p-1 w-full my-2 border-2 bg-transparent hover:border-[#D6B69B] focus:border-[#D6B69B] outline-0' />
            <input type="email" name="email" id="" placeholder='Email Address' className='p-1 w-full my-2 border-2 bg-transparent hover:border-[#D6B69B] focus:border-[#D6B69B] outline-0'/>
            <textarea name="message" id="" placeholder='Message' className='w-[100%] p-1 my-2 border-2 bg-transparent hover:border-[#D6B69B] focus:border-[#D6B69B] outline-0' ></textarea>
            <input type="submit" onClick={()=>alert("Thank You for Conatcting me !!")} className='w-[100%] p-1 transition hover:ease-in-out duration-500 hover:text-[#D6B69B] focus:border-[#D6B69B] bg-black  hover:bg-transparent hover:border-2 hover:border-[#D6B69B] outline-0'  />
          </form>
        </div>
      </div> 
    </section>
  )
}

export default Contact