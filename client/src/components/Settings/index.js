import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteUser } from '../../actions/auth'
function Settings({ auth: { user }}) {
  console.log(user.fields.user_id)
  const [show, setShow] = useState(true)
  const [delText, setDelText] = useState('')
  const handleClick = (e) =>{
    e.preventDefault()
    setShow(false)
  }
  const handleClick2 = (e) =>{
    e.preventDefault()
    if (delText === 'DELETE MY ACCOUNT'){
      deleteUser()
    }

  }
    return(
      <div>
        {show ? (
          <>
           <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
           <div className="text-3xl antialiased font-bold text-center text-indigo-900 mb-5">Settings</div>
           <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <button onClick={handleClick} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            delete account
                        </button></div></div></>) : (
                                    <>
                                    <div className="mt-8 z-1 backdrop-filter backdrop-blur-lg sm:mx-auto sm:w-full sm:max-w-md">
                                    <div className="text-3xl antialiased font-bold text-center text-indigo-900 mb-5">Delete account</div>
                                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                                      <p>in order to confirm your deletion, please type <p className="text-bold text-red-900">DELETE MY ACCOUNT</p> into the box</p>
                                      <input type='text' value={delText} onChange={e => setDelText(e.target.ATTRIBUTE_NODEvalue)} required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                    <button onClick={handleClick2} className="w-full m-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-300 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                     delete account
                                    </button>
                                    </div>
                                    </div>
                                    </>
        )}
      </div>
    )
}

Settings.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Settings);
