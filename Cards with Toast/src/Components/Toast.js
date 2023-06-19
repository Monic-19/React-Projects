import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
    const notify = () => {
        toast.success('Done!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      };

  return (
    <div className='d-flex flex-row'>
       <button onClick={notify} className='btn btn-info btn-outline-dark p-2 mx-24' >DarkMode</button>
       <ToastContainer/>
    </div>
  )
}

export default Toast
