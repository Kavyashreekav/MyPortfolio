import React from 'react'
import {PROJECTS} from "../constants/index"
import { motion } from 'motion/react'



const Projects = () => {

  const link = 
    {
      project: "https://react-and-firebase-ecommerce.vercel.app/"
    }

  return (
    <div className='border-b border-neutral-900 pb-4' id='project'>
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Project</motion.h1>
      <div className='px-4'>
        {PROJECTS.map((project, index)=>(
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className=' w-full lg:w-1/4 relative'>
            
              <img 
              src={project.image} 
              alt={project.title} 
              width={180} 
              height={180}
              className=' mb-3 rounded'
               />
            <a href={link.project} target='blank'> <button className='text-white ml-8 rounded bg-blue-700 p-0.5 hover:bg-pink-700 hover:text-white hover:border-2 '>View Project</button></a>

            {/* <p className='absolute left-0 right-40 bottom-0 rounded top-0 bg-pink-400 opacity-0 duration-500 hover:opacity-100'>View</p> */}
          </motion.div>
              <motion.div 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}}
              className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 mt-6 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-neutral-400'>{project.description}</p>
              {project.technologies.map( (tech, index)=>(
                <span key={index} className='mr-2 rounded px-2 py-1 bg-neutral-900 text-sm text-purple-800'>
                  {tech}
                </span>
              ))}
              </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
