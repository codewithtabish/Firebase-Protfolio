// import React from 'react'
import React,{useEffect,useState} from 'react'

import { NavLink } from 'react-router-dom';
import { UseFirebaseContext } from '../context/FirebaseContext';

const Blogs = () => {
  const [type, settype] = useState('')
  const {blogs,setchangeTypeBlog}=UseFirebaseContext()
 
  const changeType=(e)=>{
    settype(e.target.value)
    setchangeTypeBlog(e.target.value)
    // setchangeType(e.target.value)
    if(type=="android"){
      // getAndoidProjects('android')

    }
    // alert(type)
    // settype(:[e.target.value])



  }
  return (
    <div className=' md:min-h-[100vh] flex flex-col  py-4 px-2 container mx-auto'>
    <div className='flex justify-between md:py-7 py-3'>
      <h2 className='text-2xl  font-mono'>Blogs</h2>
      <select name="" id="" className='b-2 border-red-900 outline-none border-none'
onChange={(e)=>changeType(e)}

>
 <option value="all" name='all' onChange={(e)=>changeType(e)}>All</option>
 <option value="technology" name='technology' onChange={(e)=>changeType(e)}>Technology</option>
 <option value="fashion" name='fashion'>Fashion </option>
 <option value="ecom" name='ecom'>E-Commerce  </option>
 <option value="business" name='business'>Business </option>
</select>

    </div>
 
    <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
      
     {
      blogs.map((item,index)=>{
        return (
          <div className='flex flex-col  mb-2 gap-3 md:shadow-md p-3 md:rounded-md'>
            <img src={item.url} alt="" className='w-full rounded-md md:h-[25vh] h-[35vh]' style={{
            
              width:"100%"
            }} />
            <p className='md:font-medium'>{item.title}</p>
            <p className='text-sm text-gray-700 md:w-[85%]'>{item?.description?.slice(0,80)}</p>
            <NavLink to={`/singleBlog/${item.id}`}>

            <button
            className='bg-blue-800 rounded-md p-2 w-fit text-white'
            >Read More</button>
            </NavLink>
          </div>
        )
      })
     }
      



    </div>

    
   

  </div>
  )
}

export default Blogs





