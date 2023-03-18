import React,{useEffect} from 'react'
import { UseFirebaseContext } from '../context/FirebaseContext'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id}=    useParams()
  const {getSingleBlog,singleProject}=   UseFirebaseContext()
    useEffect(() => {
      if(singleProject?.author!=null){
        getSingleBlog("blogs",id)
        alert('jj')

      }
      else{
        getSingleBlog("projects",id)

      }
    }, [])
    
  return (
    <div className='container mx-auto py-5 md:w-[85%] md:px-0 px-2 '>
       <img src={singleProject?.url} alt="" className='md:h-[40vh] h-[30vh] sm:w-[85%] w-full' />
       <div className='flex justify-between md:w-[85%] items-center'>
       <h2 className='md:text-2xl text-gray-800 py-6 font-medium'>{singleProject?.title} </h2>
     {singleProject?.author &&   <p className='text-sm font-mono'>{singleProject.author}</p>}

       </div>
       <p className='text-gray-600 text-sm text-justify md:w-[85%]'>{singleProject?.description}</p>
       <div className="tools">
       {singleProject?.tools &&  <h2 className='text-2xl text-gray-800 font-medium'>Tools</h2>}
        {
            singleProject?.tools?.map((item,index)=>{
                return (
                    <h2>{item}</h2>
                )
            })
        }
       </div>
    
    </div>
  )
}

export default Detail