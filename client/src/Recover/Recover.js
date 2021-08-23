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
            <form>
                <input id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} class="border borderfocus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
                <button onClick = {handleSubmit} class=" p-1 m-2 bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Recover
                </button>
            </form>
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
