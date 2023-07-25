import React from 'react'
import ImageUpload from './ImageUpload'

const Home = () => {




    const LogOut=()=>{
        //Clear the user data from localstorage for logout 
        localStorage.clear()
        // It will reload page after clearing the data from localstorage
        window.location.reload()
    }





  return (
    <div>
    
    Home
    
    <button onClick={LogOut} >Logout</button>
    
    <ImageUpload/>

    </div>
  )
}

export default Home