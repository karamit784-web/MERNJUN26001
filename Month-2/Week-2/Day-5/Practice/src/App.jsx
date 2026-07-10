import React from 'react'
import Profile from './Profile'
import Navbar from './Navbar'
import Login from './Login'
import Effect from './Effect'

function App() {
  // let isLogin = true;

  // if (isLogin) {
  //   return (
  //     <>
  //       <Profile />
  //     </>
  //   );
  // }
  // return (
  //   <div>
  //     <Login />
  //   </div>
  // );

  // return <div>{isLogin ? <Profile /> : <Login />}</div>;


  function handleClick(){
    localStorage.setItem("isLogin",true)
  }
  

  return (
    <div>
      {/* <Navbar/> */}

      {/* <button 
      style={{padding:'10px',marginTop:'10px'}}
      onClick={handleClick}
      >Click here to login</button> */}

      <Effect/>
      
    </div>
  )
}

export default App;