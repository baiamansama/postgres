import { Link } from "react-router-dom"
import React from 'react'
export default function Payment() {
    return (
        <div className="p-4">
            <Link to='/test' className="inline-block px-5 py-3 rounded-lg shadow-lg bg-green-600 text-white uppercase tracking-wide font-semibold text-sm">pay</Link>
        </div>
    )
}
