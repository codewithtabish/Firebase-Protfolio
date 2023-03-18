import React,{useState} from 'react'
import {FaApple,FaBuffer,FaAccusoft,FaBtc,FaConfluence}  from 'react-icons/fa'
import {BsArrowLeftCircle}  from 'react-icons/bs'
import {AiOutlineAmazon} from 'react-icons/ai'
import {FiSearch}  from 'react-icons/fi'
import {RiArrowDropDownFill} from 'react-icons/ri'
import  {CiFacebook}  from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome,AiOutlineUsergroupAdd}  from 'react-icons/ai'
import {BiMessageSquareDetail,BiBookAlt}  from 'react-icons/bi'
import {FcViewDetails}  from 'react-icons/fc'
import {SiSkillshare}  from 'react-icons/si'
// import  {GrContactInfo}  from 'react-icons/gr'
// import
// import {AiOutlineAmazon} from 'react-icons/ai'

// import MyHome from './MyHome'
const MySidebar = () => {
    const [isOpne, setisOpne] = useState(false)
    const mymenu=[
        {title:"Home",icon:AiOutlineHome,goTo:"/"},
        {title:"About",icon:BiMessageSquareDetail,goTo:"/about"},
        {title:"Blogs",spacing:true,icon:FaBuffer,goTo:"/blogs"},
        {title:"Skills",spacing:true,icon:SiSkillshare,goTo:"/skills"},
        {title:"projects",
        subMenu:false,
        icon:BiBookAlt,
        goTo:"/projects"
       
    }
    ,
    {title:"Contact Us",icon:AiOutlineUsergroupAdd,goTo:"/contact"},
    // {title:"Inbox",icon:FaBuffer},
    // {title:"Profile",spacing:true,icon:FaBuffer},
    // {title:"Setting",icon:FaBuffer},
    // {title:"Logout"},
    ]
  return (
    <div className='flex  '>
        <div className={` bg-dark-purple h-screen
        p-5 pt-8
        relative
        transition-all duration-700
        flex
        flex-col
        gap-8
        

        ${isOpne?'w-72':'w-20'}
        `}
        >
        <BsArrowLeftCircle 
        onClick={()=>setisOpne(!isOpne)}
        className= {`bg-white text-3xl text-dark-purple
        rounded-full
        absolute
        top-9
        -right-3
        // z-30
        cursor-pointer
        border-2
        border-dark-purple
        ${!isOpne?"rotate-180 -right-2 top-8":""}

  `}
        />
        <div className='inline-flex items-center gap-4'>
            <AiOutlineAmazon
            className={`text-3xl text-white bg-yellow-500
            p-2 rounded-full
            duration-800
            // ${isOpne && 'rotate-[360deg]'}
            `}/>
            <h2
            className={`text-white text-2xl font-medium origin-left 
            duration-700
            ${! isOpne && 'scale-0'}
            `}
            >
                Protfolio</h2>

            
        </div>
        {/* Search Bar */}
         <div className={`flex bg-light-white
         py-2 
         items-center
         gap-2
         ${isOpne?"px-4":"px-2 rounded-full"}
         
  `}>
            <FiSearch
            className='text-2xl text-white'
            />
            <input  type='search'
            className={`bg-transparent
            text-white
            flex-1
            hover:border-0
            hover:border-none
            focus:outline-none
            ${!isOpne && 'hidden'}
  `}
            />




         </div>
         <div>
            {
                mymenu.map((item,index)=>{
               

                    
                    return(

                    
                    <NavLink to={item.goTo}>
                        <li className={`text-gray-300
                    hover:bg-light-white
                    items-center 
                    flex
                    gap-x-4
                    transition-all
                    duration-500
                    cursor-pointer
                    justify-between
                    mb-4
                    p-2
                    ${item.spacing?"mt-9":"mt-2"}
                    ${!isOpne && "p-2 bg-light-white rounded-full"}
                    `}>
                      <NavLink to={item.goTo}>
                      <item.icon
                        className={`text-2xl text-white
                        ${`${!isOpne && "  rounded-full"}`}

                        `}
                        />
                      </NavLink>

                    

                        <span
                        className={`${!isOpne?"hidden":""}
                        flex-1
                        `}
                        >
                            <NavLink  to={item.goTo}>
                            {item.title}

                            </NavLink>
                        </span>
                        {/* {
                            item.subMenu &&isOpne &&
                        
                        
                        
                             (
                                <RiArrowDropDownFill
                                className={`text-2xl
                                // ${!isOpne?"hidden":""}
                                
                                
                                `}
                             
                              

                                />
                             ) */}
                            
                                
                            
                        {/* } */}
                        {
                            item?.subMenuItems &&(
                                <ul>
                                    

                                </ul>

                            )
                        }

                    </li>
                    </NavLink>
                    )
                  

                })
            
            }
         </div>
        </div>
        {/* <MyHome/> */}
       
    
    </div>
  )
}

export default MySidebar