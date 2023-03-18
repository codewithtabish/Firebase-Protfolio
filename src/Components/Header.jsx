import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';
import {AiOutlineMenu}  from 'react-icons/ai'
import {SiSkillshare}  from 'react-icons/si'

const Header = () => {
    const [showMenu, setshowMenu] = useState(false)
  return (
    <div className='md:bg-gray-700 bg-none  md:static relative px-5 md:0 py-3 md:py-0'>
        <div className="container mx-auto flex justify-between items-center text-white">
            <div className="left text-gray-800  md:text-white">
                Talha Tabish
            </div>
            <div className="right">
                <ul className={`${showMenu?"flex gap-5 md:flex-row flex-col  md:static  absolute  md:h-auto  h-[80vh] bg-gray-700  items-center  transition-all duration-700 top-9 w-[75%] right-0  rounded-lg":"flex gap-5 md:flex-row flex-col  md:static  absolute  md:h-auto  h-[80vh]  bg-gray-700  items-center  top-9 w-[75%] right-[-900px]  rounded-lg transition-all duration-700"}
                `}
                 >
                    <li className='p-3'>
                    <NavLink to={'/'}>
                        Home
                        

                     </NavLink>
                    </li>
                    <li className='p-3'>
                    <NavLink to={'/about'}>
                        About
                        

                     </NavLink>
                    </li>
                    <li className='p-3'>
                    <NavLink to={'/skills'}>
                        Skills
                        

                     </NavLink>
                    </li>
                   
                    <li className='p-3'>

                    
                    <NavLink to={'/projects'}>
                        Projects
                        

                     </NavLink>
                    </li>
                    <li className='p-3'>

                    
                    <NavLink to={'/blogs'}>
                        Blogs
                        

                     </NavLink>
                    </li>
                    <li className='p-3'>

                    
                    <NavLink to={'/contact'}>
                        Contact 
                        

                     </NavLink>
                    </li>
                   
                    
                </ul>

            </div>
            <div
            className={`text-2xl text-gray-800 md:hidden   flex cursor-pointer`}
            onClick={()=>setshowMenu(!showMenu)}>
                <AiOutlineMenu
                // className={`text-2xl text-white md:hidden flex `}
                />
            </div>

        </div>
      
    </div>
  )
}

export default Header




// flex gap-5 md:flex-row flex-col  md:static  absolute  md:h-auto  h-[80vh] 
            // 
            // bg-gray-700  items-center  top-9 w-[75%] right-[-900px]  rounded-lg