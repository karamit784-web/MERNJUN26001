import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//to create the object
const nameContext = createContext();
const themeContext = createContext();

function App() {
  return (
    <>
      {/* Add the provider to the object */}
      {/* Add the value to the provider */}
      <themeContext.Provider value={"red"}>
        <nameContext.Provider value={"Abhaya"}>
          <Home />
        </nameContext.Provider>
      </themeContext.Provider>

      <hr />
      <Count />
      <hr />
      <RegisterForm/>
    </>
  );
}

// export the context object
export { nameContext, themeContext };

export default App;
