import React, { Fragment, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Subcription from './components/Subcription'
import Alert from './components/layout/Alert'
//redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

const App = () => {

  useEffect(()=>{
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }
    store.dispatch(loadUser())
  }, [])


  return (
    <Provider store={store}>      
      <Router>
        <Fragment>
        <Navbar />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/trial" component={Subcription} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
)}

export default App
