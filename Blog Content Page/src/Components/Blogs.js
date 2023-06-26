import React, { useContext } from 'react'
import { AppContex } from '../Context/AppComponent';
import Spinner from './Spinner';
import "./Blogs.css"


const Blogs = () => {
    const {loading,posts} = useContext(AppContex);

  return (


      <div className='flex flex-col text-center w-6/12  m-auto gap-8 p-6 bg-[#F3F9D2] rounded-lg hover:shadow-[0_13px_16px_15px_rgba(225,225,225,0.2)]'>
      {
        loading ? (<Spinner></Spinner> )  : (
            posts.length === 0 ? (
                <div>
                    No Post Found
                </div>
            ) : 
            (
              posts.map ( (value) => 
              { return <div key={value.id} className='flex flex-col gap-2'> 
                    <p className=' text-center text-[#2f2f2f] text-2xl font-bold '>{value.title}</p>
                    <div className='flex gap-5 ml-4 justify-center'>
                    <p className='text-ml '>By <span className='font-thin'>{value.author}</span> on <span className='font-thin'>{value.category}</span></p>
                    <p >Date : <span className='font-thin'>{value.date}</span></p>
                    </div>  
                    <p className=' text-[#93827F] w-8/12 m-auto'>"{value.content}"</p>

                    <div>
                        {value.tags.map ( (tag , index) => {
                        return <span className='text-[12px] text-left w-8/12 text-blue-600 ' key={index}> {`#${tag} `} </span>
                        } )}
                    </div>
                </div>

              }) 
            )
      
        )
      }
    </div>
  )
}

export default Blogs
