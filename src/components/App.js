import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Error from './Error'
import Todo from './Todo'

const App = () => {
  return (
    <>
      <Header />
      <main class="main">
        <div class="main_container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/todo" component={Todo} />
            <Route component={Error} />
          </Switch>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App