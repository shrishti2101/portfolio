import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import '../Components/About.css'

const About = () => {
  return (
    <section>
      <div className='items-center flex  justify-between flex-col m-[5%] text-white'>
                <h1 className='text-3xl font-bold text-[#D6B69B] underline'>Personal Details</h1>
                <div className="details flex lg:flex-row flex-col justify-around leading-12  w-full">
                    <div className="details-left">                     
                            <p><span>Name:</span> Shrishti Jain</p>
                            <p><span>Age:</span> 21</p>
                            <p><span>Languages:</span> Hindi,English</p>
                            <p><span>Country:</span> India</p>
                    </div>
                    <div className="details-right">
                            <p><span>Email:</span> shrishtijain2101@gmail.com</p>
                            <p><span>LinkedIn:</span> shrishti-jain21</p>
                            <p><span>Github:</span> https://github.com/shrishti2101</p> 
                    </div>
                </div>
                <div className='education and exp items-center flex  justify-between flex-col'>
                    <h1 className='text-3xl font-bold text-[#D6B69B] underline'>Education & Experience</h1>
                    <div className='flex md:flex-row flex-col m-[5%] leading-10'>
                    <div className='education-details md:w-[1/2] w-full'>
                        <ul>
                            <li>
                                <div className='icon'>
                                <i className=''><FaGraduationCap/></i>
                               </div>
                                <span className='font-bold'>2020-2023</span>
                                <h3>Bachelors in Computer Applications <span>- Poornima University</span></h3>
                                <p>Percentage <span>-75%</span></p>
                            </li>
                            <li>
                               <div className='icon'>
                                <i><FaGraduationCap/></i>
                               </div>
                                <span className='font-bold'>2019-2020</span>
                                <h3>12th<span>- Mahaveer Public School</span></h3>
                                <p>Percentage <span>-75%</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className='experience md:w-[1/2] w-full'>
                        <ul>
                            <li>
                            <div className='icon'>
                                <i><MdWork/></i>
                               </div>
                                <span className='font-bold'>May 2023 - Oct 2023</span>
                                <h3>UI Developer Trainee <span> - Sarvika Technologies</span></h3>
                                <p>Work as UI Developer Trainee. Have worked on responsive web designs andlive projects of company which comprises of form designing and e-commercewebsite designs.</p>
                            </li>
                         
                        </ul>
                    </div>
                    </div>
                </div>

      </div>
    </section>
    
  )
}

export default About