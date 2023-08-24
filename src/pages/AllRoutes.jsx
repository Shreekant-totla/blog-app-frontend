import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'
import Blogs from '../components/Blogs'
import PrivateRoute from '../components/PrivateRoute'

const AllRoutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/api/register" element={<SignupPage/>}/>
      <Route path="/api/login" element={<LoginPage/>}/>
      <Route path="/api/blogs" element={<PrivateRoute><Blogs/></PrivateRoute>}/>
    </Routes>
    </>
  )
}

export default AllRoutes