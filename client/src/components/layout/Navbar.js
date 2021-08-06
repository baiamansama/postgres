import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

function Navbar({ auth: { isAuthenticated, loading }, logout }) {

    const authLinks =(
        <header className='text-blue-500 shadow w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link to='/' className='flex md:w-1/5 font-semibold title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
                    <span className='ml-3 text-xl'>AIMON</span>
                </Link>
                <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
                    <Link to='/courses' className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        Courses
                    </Link>
                    <div className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        <Link to='/inbox'>
                            Inbox
                        </Link>
                    </div>
                    <Link to='/settings' className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        Settings
                    </Link>
                    <Link onClick={logout} to="/" className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        Log out
                    </Link>
                </nav>
            </div>
        </header>
    )

    const guestLinks =(
        <header className='text-blue-500 shadow w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link to='/' className='flex md:w-1/5 font-semibold title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
                    <span className='ml-3 text-xl'>AIMON</span>
                </Link>
                <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
                    <Link to='/mission' className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        Mission
                    </Link>
                        <Link to='/login' className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                            Sign in
                        </Link>
                    <Link to='/register' class="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-base md:px-10">
                        Free trial
                    </Link>
                </nav>
            </div>
        </header>
        )

    return (<div>{!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}</div>)
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logout })(Navbar);
