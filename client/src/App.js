import React, { Fragment, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Subscribe from './components/Subscription/Subscribe'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Alert from './components/layout/Alert'
import Dashboard from './components/dashboard/Dashboard'
import Payment from './components/Subscription/Payment'
import Recover from './Recover/Recover'
import PasswordReset from './PasswordReset/PasswordReset'
import Vocablist from './components/dashboard/Vocablist'
import PrivateRoute from './components/routing/PrivateRoute'
//redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Test from './components/Subscription/Test'
import Settings from './components/Settings'

const App = () => {

  useEffect(()=>{
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      store.dispatch(loadUser())
    }
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
              <Route exact path="/recover" component={Recover} />
              <Route exact path="/password-reset" component={PasswordReset} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/subscribe" component={Subscribe} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/vocablist" component={Vocablist} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
)}

export default App
