import React ,{useEffect} from 'react'
import ImageUpload from './ImageUpload'
import {auth} from "./config"
import "./style.css"
const Home = () => {
  

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      // If data exists, set isLoggedIn to true
      
    }
    // eslint-disable-next-line
  }, []);

  
  
 


    const LogOut=()=>{
        //Clear the user data from localstorage for logout 
        localStorage.removeItem('user')
        // It will reload page after clearing the data from localstorage
        window.location.reload()
       
    }


  


  return (
    <div className='Container' >
    
   
   
    <>
   <div className=" " >
   <button className='btn btn-primary' onClick={LogOut} >Logout</button>
   </div>
    
   <h3 className="title">{auth.currentUser.providerData.map((e)=>{
    return <div key={e.uid} > <img className="rounded-3xl" src={e.photoURL}  height="100px" width="100px" alt='not found' /> <p>Welcome ,{e.displayName}</p> <p>{e.email}</p> </div>
  })} </h3>
   <ImageUpload/>
   </>
  
   
    </div>
  )
}

export default Home


//https://github.com/Ramprasadya/tapop