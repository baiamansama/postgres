import React from 'react'
import { Link } from 'react-router-dom'
function Subcription() {
    return (
        <div class="class=container m-auto">
            <div class="flex flex-wrap items-center justify-center w-full text-center" >
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                <div class="flex flex-col rounded border-2 border-indigo-700 bg-indigo-700">
                    <div class="py-5 text-indigo-700 bg-white">
                    <h3>1 month premium</h3>
                    <p class="text-5xl font-bold">
                        $20
                    </p>
                    </div>           
                    <div class="py-5 bg-indigo-700 text-white rounded-b">
                    <p>info about plan</p>
                    <Link to='#'><button class="px-5 py-2 mt-5 uppercase rounded bg-white text-indigo-700 font-semibold hover:bg-indigo-900 hover:text-white">
                        subscibe
                    </button></Link>
                    </div>            
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                <div class="flex flex-col rounded">
                    <div class="py-7 bg-indigo-700 text-white rounded-t">
                    <h2 class="uppercase text-yellow-300 font-extrabold">
                        Most Popular
                    </h2>
                    <h3>3 month premium</h3>
                    <p class="text-5xl font-bold">
                        $75
                    </p>
                    </div>
                    <div>
                    <div class="pt-1 pb-7 bg-indigo-700 text-white rounded-b">
                        <p>info</p>
                        <Link>
                            <button class="px-5 py-2 mt-5 uppercase rounded bg-yellow-300 text-indigo-700 font-semibold hover:bg-indigo-900 hover:text-white">
                            subscibe
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 p-4">
                <div class="flex flex-col rounded border-2 border-indigo-700 bg-indigo-700">
                    <div class="py-5 text-indigo-700 bg-white">
                        <h3>5 month premium</h3>
                        <p class="text-5xl font-bold">
                            $99
                        </p>
                        </div>          
                        <div class="py-5 bg-indigo-700 text-white rounded-b">
                        <p>info</p>
                        <Link to='#'><button class="px-5 py-2 mt-5 uppercase rounded bg-white text-indigo-700 font-semibold hover:bg-indigo-900 hover:text-white">
                        subscibe
                        </button></Link>
                    </div>            
                </div>
            </div>
        </div>
        </div> 
    )
}

export default Subcription
