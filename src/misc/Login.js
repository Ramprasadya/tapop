import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/userAuthContext";
const Login = () => {

   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
    


  return (
   <>
   {error && <p>{error}</p>}
    <h2 className="mb-3">Firebase Auth Login</h2>
    <form onSubmit={handleSubmit} >
    <label htmlFor="">Enter Yor Email</label><br />
      <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}   /> <br />
      <label htmlFor="">Enter your Password</label><br />
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  /> <br />
    <button type="submit"  className='bg-red-200 py-4 px-4 rounded-md '  >Login</button>
    </form>

    <button onClick={handleGoogleSignIn} >Login With Google</button>


    <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>

    
</>
  )
}

export default Login