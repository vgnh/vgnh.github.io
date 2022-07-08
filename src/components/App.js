import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Error from './Error'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route element={<Error/>} />
    </Routes>
  )
}

export default App