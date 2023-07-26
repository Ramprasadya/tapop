import React ,{useEffect} from 'react'
import ImageUpload from './ImageUpload'
import {auth} from "./config"
import { useNavigate } from 'react-router-dom'
import "./style.css"
const Home = ({isLoggedIn,setIsLoggedIn}) => {
  

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      // If data exists, set isLoggedIn to true
      setIsLoggedIn(true);
    }
    // eslint-disable-next-line
  }, []);

  let title = auth.currentUser.displayName
  
   let navigate = useNavigate();


    const LogOut=()=>{
        //Clear the user data from localstorage for logout 
        localStorage.clear()
        // It will reload page after clearing the data from localstorage
        window.location.reload()
       
    }


  


  return (
    <div className='Container' >
    
   
   {isLoggedIn ? (
    <>
   <div className=" " >
   <button className='btn btn-primary' onClick={LogOut} >Logout</button>
   </div>
    
   <h2 className="title">Hello {title} </h2>
   <ImageUpload/>
   </>
   ):(
   <>
    {navigate("/login")}
   </>
   )}
    </div>
  )
}

export default Home


//https://github.com/Ramprasadya/tapop