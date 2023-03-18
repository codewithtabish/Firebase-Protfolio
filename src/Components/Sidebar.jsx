import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme}  from 'react-icons/si'
import {GrProjects} from 'react-icons/gr'
import {FaBlogger}  from 'react-icons/fa'
import {MdOutlineContacts}  from 'react-icons/md'
import {AiOutlineArrowRight}  from 'react-icons'
const Sidebar = () => {
  return (
    <div className=' bg-gray-700 sidebar px-4 text-white justify-center items-center'>
      <div className='py-8'>
        <ul className='flex flex-col gap-8 items-center justify-center'>

            <li className='flex flex-col gap-1 items-center justify-center'>
            <NavLink to={'/'}>
            <AiOutlineHome
            className='text-2xl text-white cursor-pointer'
            />
            </NavLink>
            <NavLink to={'/'}>
          
            Home

        </NavLink>
       
            </li>
            <li  className='flex flex-col gap-1 items-center justify-center'>
            <NavLink to={'/about'}>
            <SiAboutdotme
               className='text-2xl text-white cursor-pointer'
               />
               </NavLink>
            <NavLink to={'/about'}>
           
               About

        </NavLink>
            </li>
            <li className='flex flex-col gap-1 items-center justify-center'>
            <NavLink to={'/projects'}>
            <GrProjects
                  className='text-2xl text-white cursor-pointer'
                  />
                  </NavLink>
            <NavLink to={'/projects'}>
               
                  Projects

        </NavLink>
            </li>
            <li className='flex flex-col gap-1 items-center justify-center'>
            <NavLink to={'/blogs'}>

            <FaBlogger
              className='text-2xl text-white cursor-pointer'
              />
              </NavLink>
            <NavLink to={'/blogs'}>
          
              Blogs

        </NavLink>
            </li>
            <li className='flex flex-col gap-1 items-center justify-center'>
            <NavLink to={'/contact'}>

            <MdOutlineContacts
             className='text-2xl text-white cursor-pointer'
             />
             </NavLink>
            <NavLink to={'/contact'}>
           
             Contact Us

        </NavLink>
            </li>

        </ul>
       
      </div>
    
    </div>
  )
}

export default Sidebar