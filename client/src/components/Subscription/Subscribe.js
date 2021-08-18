import React from 'react'
import { Link } from 'react-router-dom'
import subs_1 from '../image/subs_1.jpeg'
import subs_2 from '../image/subs_2.jpeg'

function Subcription() {
    return (
        <div className='grid grid-cols-2'>
            <div className="px-8 py-12 max-w-md mx-auto">
                <img className="mt-6 rounded-lg shadow-xl" src={subs_1} alt="subscription" />
                <h1 className="mt-6 text-2xl font-bold text-gray-900">subscribe to 1 month <span className="text-indigo-900">premium</span></h1>
                <div className="mt-4">
                    <Link to='/payment' className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-600 text-white uppercase tracking-wide font-semibold text-sm">subscribe</Link>
                </div>
            </div>
            <div className="px-8 py-12 max-w-md mx-auto">
                <div>
                    <img className="mt-6 rounded-lg shadow-xl" src={subs_2} alt="subscription" />
                    <h1 className="mt-6 text-2xl font-bold text-gray-900">subscribe to 3 month <span className="text-indigo-900">premium</span></h1>
                    <div className="mt-4">
                        <Link to='/payment' className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-600 text-white uppercase tracking-wide font-semibold text-sm">subscribe</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subcription
