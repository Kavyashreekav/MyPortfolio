import React from 'react'
import AboutImage from "../assets/Images/AboutImage.jpg"
import {ABOUT_TEXT} from "../constants/index"
import certificate from "../assets/Images/Certificate.pdf"
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' id='about'>
      <h1 className='my-20 text-center text-3xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
         <div className='flex items-center justify-center'><img className='px-3 rounded-2xl' src={AboutImage} alt='About Image'/></div>
        </motion.div>
        <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
        className='w-full lg:w-1/2'>
         <div className='flex flex-col justify-center lg:justify-start'>
            <p className='px-2 my-2 max-w-xl py-6'>
              {ABOUT_TEXT}
            </p>
            <a href={certificate} target='blank' className='text-purple-500 pl-2'>View course Certificate <button className='text-white  rounded bg-gray-600 p-0.5 hover:bg-cyan-500 hover:text-black hover:border-2'>View</button></a>
         </div>
         </motion.div>
      </div>
    </div>
  )
}

export default About
