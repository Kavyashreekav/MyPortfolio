import React from 'react'
import ProfilePic from "../assets/Images/ProfilePic.jpeg"
import {HOME_CONTENT} from "../constants/index"
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import {links} from "../constants/index"
import { motion } from "motion/react"
import { delay } from 'motion';


const Home = () => {

  const container = (delay) => (
    {
      hidden: {x: -100, opacity: 0},
      visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
      },
    }
  );

 const links = 
    {
      linkedIn: "https://www.linkedin.com/in/kavya-shree1/",
      github: "https://github.com/Kavyashreekav"
    }

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
         <div className='flex flex-col px-2 lg:items-start'>
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            // initial={{x: -100, opacity:0}}
            // animate={{x:0, opacity:1}}
            // transition={{duration:0.5, delay:0}} 
            className='pb-14 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Kavya Shree
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Java Full Stack Developer</motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HOME_CONTENT}
            </motion.p>
         </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex flex-col justify-center '>
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
            className='px-3 rounded-2xl lg:h-80 w-full lg:w-80 ' src={ProfilePic} alt='Kavya shree' />
            <div className='flex py-5 justify-center lg:py-6 lg:pr-36 '>
              <a href={links.linkedIn} target='blank' className='pr-2 hover:text-cyan-500'><FaLinkedin size={30}/></a>
              <a href={links.github} target='blank' className='hover:text-cyan-500'><FaGithub size={30}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
