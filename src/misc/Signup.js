import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/userAuthContext";


const Signup = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
    

    
  return (
   <div className="h-1/2 w-1/2 mx-auto bg-purple-200 ">
    {error && <p>{error}</p> }
    <h2 className="text-center my-3 font-bold text-3xl ">Firebase Auth Login</h2>
   <div className="flex justify-center my-4" >
   <form action="">
    
    <input className="px-4 py-3 rounded-sm"  type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} /> <br/>
     
    <input  className="px-4 my-3 py-3 rounded-sm" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
 
    <div>
     <button className='bg-blue-500 py-3 px-4 rounded-md text-white '  type="submit" onClick={handleSubmit} >Sign up</button>
    </div>
 
    </form>
   </div>

   <div className="p-4 box mt-3 text-center">
        Already have an account? <Link className="bg-blue-500 py-3 px-3 rounded-md text-white " to="/">Log In</Link>
    </div>


    
   </div>
  )
}

export default Signup