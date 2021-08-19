import React, {useState} from 'react'

export default function Vocab({vocablist}) {
    const [five, setFive] = useState(0)
    console.log('one')
    const isKnown = () => {
         setFive(five+1)
        }
    const unKnown = () => {
        setFive(five+1)
    }
    return (
        <div>
            {five === 4 ? (
                <div className= "text-center"> 
                    <p>🥳🥳🥳</p>
                    <p>You did it! Turn this into daily habit</p>
                </div>
        ) : (
            <div className = "">
                <p className="text-center"></p>
                <button onClick={isKnown} className="p-2 bg-red-100 ml-2">👍</button>
                <button onClick={unKnown} className="p-2 bg-red-100 ml-2">👎</button>
            </div>
        )}
        <div className="p-2 bg-green-300 rounded-xl m-1">
            <a href="#">go to vocablist</a>
        </div>
        </div>
    )
}
