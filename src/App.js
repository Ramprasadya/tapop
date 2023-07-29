
import React from "react";
import Login from "./misc/Login";
import { Routes,Route } from "react-router-dom";
import Signup from "./misc/Signup";
import { UserAuthContextProvider } from "./Context/userAuthContext";
// import ImageUpload from "./misc/ImageUpload";
import Home from "./misc/Home";
import ProtectedRoute from "./misc/protectedRoute";


function App() {

  
  
  return (
    <>
    {/* <Home/> */}
     {/* <ImageUpload/> */}
     <UserAuthContextProvider>
     <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>

     </UserAuthContextProvider>
     
    </>
  );
}

export default App;
