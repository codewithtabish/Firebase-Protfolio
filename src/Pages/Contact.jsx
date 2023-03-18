import React,{useState} from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [datas, setfromData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    message:''
  })
 

  const handleChange=(e)=>{
    setfromData({
      // ...datas,
      [e.target.name]:e.target.value
    })
    // alert('aa')

  }
  const formSubmissionMethod=(e)=>{

    e.preventDefault()
    toast.success('🦄  submitted successfully!', {
      position: "top-right",
      top:'10%',
      right:'5%',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setfromData({
        firstName:'',
    lastName:'',
    email:'',
    message:''

      })
      
  }
  return (
    <div className='container mx-auto md:py-12 py-8 md:px-4 px-5'>
      <h1 className='text-gray-400 py-5 uppercase md:text-3xl text-xl
       text-center 
    
      '>Feel Free To Contact Us</h1>

      <div className='md:my-12 my-8'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.384583906107!2d74.38530752205105!3d31.480293802123537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905fd556dd06b%3A0xd3d9770b88f0c919!2sDha%20Phase%201%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1679169055838!5m2!1sen!2s" width="" height="450" style={{border:0,width:'70vw',height:'50vh'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <form action="https://formspree.io/f/mayzozzb"  method='POST'
       
        onSubmit={formSubmissionMethod}
        >
          <div className='max-w-xl mx-auto grid gap-3'>
            <div className='md:col-start-1 md:col-end-6'>
              <label htmlFor="" className='text-gray-500
              font-medium
              '>First Name</label>
              <input type="text"  required placeholder='First Name'  className='py-2 px-2 w-full
              md:mt-2
                bg-gray-100 hover:outline-none
              rounded-md outline-none 
              hover:border-none

              '
              name={datas.firstName}
               onchange={handleChange}
               value={datas.firstName}
              />

            </div>
            <div className='md:col-start-6 md:col-end-12'>
            <label htmlFor="" className='text-gray-500
              font-medium
              '>last Name</label>
              <input type="text" required  placeholder='First Name'  className='py-2 px-2 w-full
                    md:mt-2
                bg-gray-100 hover:outline-none
              rounded-md outline-none
              hover:border-none

              '
              name={datas.lastName}
               onchange={handleChange}
               value={datas.lastName}
              />

            </div>
            <div className='md:col-start-1 md:col-end-12'>
            <label htmlFor="" className='text-gray-500
              font-medium
              '>Email</label>
              <input type="email" required  placeholder='Email'  className='py-2 px-2 w-full
                 
                bg-gray-100 hover:outline-none
              rounded-md outline-none
              hover:border-none
              mb-2

              '
              name={datas.email} 
              value={datas.email}
              onchange={handleChange}
              />

            </div>
      
            <div className='md:col-start-1 md:col-end-12'>
            <label htmlFor="" className='text-gray-500
              font-medium
              '>Message</label>
              <textarea type="email" required 
              onChange={handleChange}
              name={datas.message}
              value={datas.message}
               placeholder='Enter Your Message here '  onchange={handleChange}

               className='py-2 px-2 w-full
                 
                bg-gray-100 hover:outline-none
              rounded-md outline-none hover:border-none
              mb-2


              'cols={10} rows={10}></textarea>

            </div>
            <div className='md:col-start-1 md:col-end-12
            flex items-center justify-center
            '>
         
              <input type="submit" 

               className='py-3 px-4
              
               rounded-md outline-none hover:border-none
               bg-cyan-500  w-fit mx-auto
               text-white cursor-pointer hover:gb-cyan-400
               transition-all duration-500 hover:scale-95

 
                 
            
              '
              value={'Submit'}
          
              />

            </div>
            
      

          </div>
          

          

        </form>
      </div>


    </div>
  )
}

export default Contact