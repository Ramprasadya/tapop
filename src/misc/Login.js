import React, { useState } from 'react'
import {auth,provider} from './config'
import { signInWithPopup} from "firebase/auth"
import Home from './Home'

const Login = () => {

    const [value, setValue] = useState('')

    const handleClick=()=>{
     signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.getItem("email",data.user.email)
     })




    }
  return (
    <div >
    {value?<Home/>:
        <button onClick={handleClick} >Login with Google </button>
    }
    </div>
  )
}

export default Login