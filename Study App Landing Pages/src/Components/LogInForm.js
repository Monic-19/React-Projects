import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';

const LogInForm = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const naviagte = useNavigate();

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const [showPassword, setShowPassword] = useState(false)

    function submitHandler(event) {
        // console.log("loggedin");
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        naviagte("/dashboard");

        console.log("Final login data")
        console.log(formData);
    }



    return (
        <div>

            <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input required type='email' value={formData.email} onChange={changeHandler} placeholder='Enter email id' name="email" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
                    <input required type={showPassword ? "password" : "text"} value={formData.password} onChange={changeHandler} placeholder='Enter Password' name="password" className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>

                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                    </span>

                    <Link to="#">
                        <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                            Forgot Password
                        </p>
                    </Link>
                </label>

                <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>

            </form>

        </div>
    )
}

export default LogInForm
