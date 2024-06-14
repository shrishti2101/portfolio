import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Components/Home.css"
import hero from '../Assets/self.png'
// import { FaHtml5 } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped as Typed} from "react-typed";


const Home = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/about');
  };
  return (
    <section className='hero'>
        <div className='flex flex-col md:flex-row md:justify-evenly items-center m-[5%] leading-10'>
        
            <div className='hero_img md:w-[40%] w-full relative'>
              <img src={hero} alt="" className='top-0 absolute'/>
            </div>
            <div className='hero_txt flex md:w-[60%] flex-col text-justify w-full text-pink-100'>
            <h1 className='hero-title text-4xl text-[#D6B69B] font-bold'>
               -Hi , I'm <span className="title">
                <Typed strings={["Shrishti Jain","Frontend Developer"] }
                typeSpeed={100} 
                backSpeed={100} 
                loop/>
                </span></h1>
            <p className='p-2'>

            As a recent graduate, I'm deeply passionate about web development and committed to continuously learning and improving my skills. I have a strong desire to stay updated with the latest technologies and industry trends.
            </p>
            
           <div className='social-links p-1'>
              <div c className='p-3 flex'>
              <a href="https://github.com/shrishti2101" className='me-5'><span className='text-3xl hover:text-[#D6B69B]'><FaSquareGithub /></span></a>
              <a href="https://www.linkedin.com/in/shrishti-jain21/"><span  className='text-3xl hover:text-[#D6B69B]'><FaLinkedin /></span></a>
              </div>
           </div>
        
          <input type="button" value="Know More"   onClick={handleKnowMoreClick}  className='border-2 font-bold border-2 text-white hover:bg-[#D6B69B] hover:text-black w-[25%] transition hover:bg-black hover:text-white hover:ease-in-out duration-500'/>   
            </div>
        </div>
    </section>
  
  )
}

export default Home