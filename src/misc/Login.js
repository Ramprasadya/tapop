import React, { useState } from 'react'
import {auth,provider} from './config'
import { signInWithPopup} from "firebase/auth"
import Home from './Home'

const Login = () => {

    const [value, setValue] = useState('')

    const handleClick=()=>{
        // Signin with google popup
     signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        // save the user email to localstorage 
        localStorage.getItem("email",data.user.email)
     })
    }
  return (
    <div >
    
    {value?<Home/>: //redirect to Home page After signIn Complete
        <button onClick={handleClick} >Login with Google </button>
    }
    </div>
  )
}

export default Login