import React from 'react'
import Template from '../Components/Template'
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {


  return (
    <Template 
    title="Welcome Back"
    desc1="Build skills for today,tomottoe and beyond."
    desc2="Education to futire-proof your career."
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    />

  
  )
}

export default Login
