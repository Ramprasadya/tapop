import React, { useState } from 'react'
import {auth,provider} from './config'
import { signInWithPopup} from "firebase/auth"
import Home from './Home'

const Login = () => {

    const [value, setValue] = useState('')
    

    const handleClick=()=>{
        try {
            // Signin with google popup
     signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        // save the user email to localstorage 
        localStorage.setItem("user",data.user.email)
        
     })
        } catch (error) {
        alert("Some Error Occured : Please Try Again")
        }
    }
  return (
   <div className="container my-4 ">
     <div className='d-flex justify-content-center' >
    
   <div>
   {value?<Home  />: //redirect to Home page After signIn Complete
        <button className='btn btn-primary '  onClick={handleClick} > SignUp with Google </button>
    }
   </div>
    </div>
   </div>
  )
}

export default Login