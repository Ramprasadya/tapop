import React from 'react'

const Home = () => {
    const LogOut=()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
    
    Home
    
    <button onClick={LogOut} >Logout</button>
    
    </div>
  )
}

export default Home