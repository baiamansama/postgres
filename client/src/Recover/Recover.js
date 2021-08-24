import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { recover } from '../actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
function Recover({recover}) {
    const [email, setEmail] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        recover(email)
    }
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="text-3xl antialiased font-bold text-center text-indigo-900 mb-5">Recover Email</div>
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm front-medium text-gray-700">Email address</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            <button onClick = {handleSubmit} class=" p-1 m-2 bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                                Recover
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
Recover.propTypes = {
    recover: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, {recover})(Recover)
