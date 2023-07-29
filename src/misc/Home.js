import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/userAuthContext"
import { auth } from "./config";
import "./style.css"
import ImageUpload from "./ImageUpload"
import notFound from "./not-found.png"
const Home = () => {
  

  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  


  return (
    <div className=' bg-purple-50 my-4 ' >
    
   <div className='flex h-22 justify-center ' >
   
    <div className='mx-52' >
          
   <h3 className="title">{auth.currentUser.providerData.map((e)=>{
    return <div key={e.uid} > <img className="rounded-3xl h-10" src={e.photoURL || notFound}   alt='not found' /> <p>Welcome, {e.displayName ||e.email }</p> </div>
  })} </h3>
    </div>

  
  <div className=" mx-48 " >
   <button className='px-4  py-4 bg-blue-500 text-white rounded-md ' onClick={handleLogout} >Logout</button>
   </div>
  




   </div>
   
    
   


   <ImageUpload/>
   
  
   
    </div>
  )
}

export default Home


//https://github.com/Ramprasadya/tapop