import React from 'react'
import Subcription from '../Subcription'
import { Link } from 'react-router-dom'

function Login() {
    const handleSubmit = () =>{

    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" action={handleSubmit} method="POST">
                    <div>
                        <label htmlFor="username" className="block text-sm front-medium text-gray-700">Full name</label>
                        <div className="mt-1">
                            <input id="username" name="username" type="text" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm front-medium text-gray-700">Email address</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm front-medium text-gray-700">Password</label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm front-medium text-gray-700">Confirm password</label>
                        <div className="mt-1">
                            <input id="confirm-password" name="confirm-password" type="password" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </button>
                    </div>
                </form>
                <h3>Already have an account? <Link to='login' className="text-gray-500">Login</Link></h3>
            </div>

        </div>

)}

export default Login
