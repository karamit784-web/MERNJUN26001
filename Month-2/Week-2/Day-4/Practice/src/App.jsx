
import { Route,Routes } from 'react-router'
import Home from './Home'
import Service from './Service'
import AdminPage from './AdminPage'
import Profile from './Profile'
import AdminDashbord from './AdminDashbord'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>

        <Route path='/admin' element={<AdminPage/>}>
          <Route index element={<AdminDashbord/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
