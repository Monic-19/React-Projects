import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import {Route,Routes} from "react-router-dom";
import {useState} from 'react';
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false);

  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col" >
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}> 
        <Dashboard></Dashboard>
        </PrivateRoute>
      }></Route>
    </Routes>
   
  </div>
  )
}

export default App;
