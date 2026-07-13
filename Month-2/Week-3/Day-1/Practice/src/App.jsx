import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GetData from './GetData'
import PostData from './PostData'
import PutData from './PutData'
import DeleteData from './DeleteData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetData/>
      <PostData/>
      <PutData/>
      <DeleteData/>
    </>
  )
}

export default App
