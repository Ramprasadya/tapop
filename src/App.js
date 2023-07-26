import { useState } from "react";
import React from "react";
import Login from "./misc/Login";
// import ImageUpload from "./misc/ImageUpload";
// import Home from "./misc/Home";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
    {/* <Home/>
     <ImageUpload/> */}
      <Login  props isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default App;
