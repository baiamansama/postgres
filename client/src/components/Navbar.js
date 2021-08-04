import React from 'react'
import {
    Link
  } from "react-router-dom";
function Navbar() {
    return (
        <header className='text-blue-500 shadow w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link to='/' className='flex md:w-1/5 font-semibold title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
                    <span className='ml-3 text-xl'>AIMON</span>
                </Link>
                <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
                    <Link to='/mission' className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        Mission
                    </Link>
                    <div className='mx-5 font-semibold cursor-pointer hover:text-indigo-300'>
                        <Link to='/login'>
                            Sign in
                        </Link>
                    </div>
                    <Link to='/trial' class="flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-base md:px-10">
                        Free trial
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
