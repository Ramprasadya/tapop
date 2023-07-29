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
   <div className="container my-4">
    {error && <p>{error}</p> }
   <form action="">
    <label htmlFor="">Enter Your Email</label>
   <input  type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
    <label htmlFor="">Enter Your Password</label>
   <input  type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

   <div>
    <button type="submit" onClick={handleSubmit} >Sign up</button>
   </div>

   </form>

   <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
    </div>


    
   </div>
  )
}

export default Signup