import React from 'react'
import {FiLinkedin}  from 'react-icons/fi'
import {SiIndeed} from 'react-icons/si'
import {AiOutlineGithub}  from 'react-icons/ai'
import Sidebar from '../Components/Sidebar'

const Home = () => {
  return (
    <div className='z-40'>
 
      
        <div className=' '>
        <div className="container mx-auto flex md:justify-between items-center flex-col-reverse md:flex-row md:min-h-[100vh]">
        <div className="left flex-col flex flex-1">
          <h2 className='py-5 md:text-2xl sm:text-xl text-gray-900 font-bold'>Hi All <span>&#129309;</span> I am Talha Tabish</h2>
          <p className='text-gray-500 text-sm text-justify  md:w-[50%] w-[85%]'>
            A  passionate junior Software Developer having an experience of web and android application.

          </p>
          <div className="links-follow flex gap-5 my-5">
            <div className='bg-gray-900 text-white md:text-2xl text-xl md:p-3 p-2 rounded-full cursor-pointer'>

            <FiLinkedin
            className=''
            />
            </div>
            <div className='bg-red-900 text-white md:text-2xl text-xl md:p-3 p-2 rounded-full cursor-pointer'>

            <SiIndeed/>
            </div>
            <div className='bg-blue-900 text-white  md:text-2xl text-xl md:p-3 p-2 rounded-full cursor-pointer'>
            <AiOutlineGithub/>

            </div>
          </div>


        </div>
        <div className="right flex-1">
          <img src="images/la.jpg" alt="" className='w-100 w-[100%]' />

        </div>

      </div>

        </div>

      
     
      
    </div>
  )
}

export default Home