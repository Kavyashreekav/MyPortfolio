import React from 'react'
import ResumeImage from "../assets/Images/resume_image.jpg"

const Resume = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 ' id='resume'>
        <h1 className='my-20 text-center text-4xl'>Resume</h1>
      <div className='flex flex-wrap lg:justify-center items-center px-4'>
        <div className='w-full lg:w-1/4'>
         <img src={ResumeImage} 
              alt='Resume Image'    
              width={180} 
              height={180}
              className='mb-6 rounded'/>
        </div>
        <div className='pb-6'>
         <p>You can view my Resume  <a href='https://scarlet-eryn-26.tiiny.site' target='blank'><button className='hover:border-2 hover:border-white rounded p-1 bg-cyan-600 '>Download</button></a> </p>
        </div>
      </div>
    </div>
  )
}

export default Resume
