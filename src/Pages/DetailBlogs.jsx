import React,{useEffect} from 'react'
import { UseFirebaseContext } from '../context/FirebaseContext'
import { useParams } from 'react-router-dom'

const DetailBlogs = () => {
    const {idBlog}=    useParams()
    const {getSingleBlog,singleBlogs,getSingleBlogTwo}=   UseFirebaseContext()
      useEffect(() => {
    
     getSingleBlogTwo("blogs",idBlog)
  
      }, [])
  return (
    <div className='container mx-auto py-5 md:w-[85%] md:px-0 px-5'>
         <img src={singleBlogs?.url} alt="" className='md:h-[40vh] h-[30vh] sm:w-[85%] w-full' />
    {/* <img src={singleBlogs?.url} alt="" className='md:h-[40vh] h-[30vh] md:w-[85%]' /> */}
    <div className='flex justify-between md:w-[85%] items-center'>
    <h2 className='md:text-2xl text-gray-800 py-6 font-medium'>{singleBlogs?.title} </h2>
  {singleBlogs?.author &&   <p className='text-sm font-mono'>{singleBlogs.author}</p>}

    </div>
    <p className='text-gray-600 text-sm text-justify md:w-[85%]'>{singleBlogs?.description}</p>
    <div className="tools">
    {singleBlogs?.tools &&  <h2 className='text-2xl text-gray-800 font-medium'>Tools</h2>}
     {
         singleBlogs?.tools?.map((item,index)=>{
             return (
                 <h2>{item}</h2>
             )
         })
     }
    </div>
 
 </div>
 
  )
}

export default DetailBlogs