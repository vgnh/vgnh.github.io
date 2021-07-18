import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'
import Error from './Error'

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={Error} />
    </Switch>
  )
}

export default App