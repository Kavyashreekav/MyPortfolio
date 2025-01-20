import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'motion/react'


const Contact = () => {
  return (
    <section className='border-b border-neutral-900 pb-20' id='contact'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1}}
      className='text-center tracking-tighter'>
        <motion.a 
        //  whileInView={{opacity:1, x:0}}
        //  initial={{opacity:0, x:-100}}
        //  transition={{duration:1}}
        >{CONTACT.email}</motion.a>
        <motion.p
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:1}}
         className='my-1'>{CONTACT.phoneNo}</motion.p>
        
        <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        >{CONTACT.Location}</motion.p>
      </motion.div>   
      </section> 
  )
}


    


export default Contact
