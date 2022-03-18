import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from '@app/pages/Home'

const RoutesWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesWrapper;