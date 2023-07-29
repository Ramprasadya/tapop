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
   <div className="h-1/2 w-1/2 mx-auto bg-purple-200 " >
   {error && <p>{error}</p>}
    <h2 className="text-center my-3 font-bold text-3xl ">Firebase Auth Login</h2>
    <div className="flex justify-center my-4 " >
    <form onSubmit={handleSubmit} >
    
      <input className="px-4 py-3 rounded-sm"  type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}   /> <br />
      
      <input className="px-4 my-4 py-3 rounded-sm" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}  /> <br />
    <div className="my-2" >
    <button type="submit"  className='bg-blue-500 py-3 px-4 rounded-md text-white '  >Login</button>
    <button className="py-3 mx-4 px-4 bg-green-500 text-white rounded-md "  onClick={handleGoogleSignIn} >Login With Google</button>
    </div>
    </form>
    </div>



    <div className="p-4 box mb-3 text-center">
        Don't have an account? <Link className="bg-blue-500 py-3 px-4 rounded-md text-white " to="/signup">Sign up</Link>
      </div>

    
</div>
  )
}

export default Login