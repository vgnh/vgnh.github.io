import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'
import Error from './Error'

const App = () => {
  return (
    <Routes>
      <Route path="/" component={Home} exact />
      <Route component={Error} />
    </Routes>
  )
}

export default App