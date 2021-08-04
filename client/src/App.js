import React, { Fragment } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Subcription from './components/Subcription'

const App = () => {
  return (
    <Router>
      <Fragment>
      <Navbar />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/trial" component={Subcription} />
          </Switch>
        </section>
      </Fragment>
    </Router>
)}

export default App
