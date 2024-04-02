import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Containers/Home'
import Catalog from '../Containers/Catalog'
import Login from '../components/Login'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalog />} />
      <Route path="/account/login" element={<Login login />} />
      <Route path="/account/register" element={<Login register />} />
      <Route path="/account/recover" element={<Login recover />} />
    </Routes>
  )
}
