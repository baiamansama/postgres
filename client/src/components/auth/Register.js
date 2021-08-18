import React, { useState }from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'
function Register({ setAlert, register, isAuthenticated }) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const { name, email, password, confirmPassword } = formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setAlert("passwords do not match", "danger");
        }else{
            register({ name, email, password })
        }
    }
    const handleChange =(e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    if(isAuthenticated){
        return <Redirect to='/subscribe' />
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="text-3xl antialiased font-bold text-center text-indigo-900 mb-5">Sign up</div>
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm front-medium text-gray-700">Full name</label>
                        <div className="mt-1">
                            <input id="name" name="name"type="text" value={name} onChange={e => handleChange(e)} required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm front-medium text-gray-700">Email address</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" value={email} onChange={e => handleChange(e)} autoComplete="email" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm front-medium text-gray-700">Password</label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" value={password} onChange={e => handleChange(e)} required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm front-medium text-gray-700">Confirm password</label>
                        <div className="mt-1">
                            <input id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={e => handleChange(e)} required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="mt-2"><h3>Already have an account? <Link to='/login'><span className="text-indigo-500">Login</span></Link></h3></div>
            </div>
        </div>

)}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, { setAlert, register })(Register)
