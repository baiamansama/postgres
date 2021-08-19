import React, {useState} from 'react'

export default function Vocab({ vocablist }) {
    const [five, setFive] = useState(0)
    const isKnown = () => {
        vocablist[five]['iKnow'] = true
        setFive(five+1)
        }
    const unKnown = () => {
        vocablist[five]['iKnow'] = false
        setFive(five+1)
        
    }
    console.log(vocablist)
    return (
        <div>
            {five === 4 ? (
                <div className= "text-center"> 
                    <p>🥳🥳🥳</p>
                    <p>You did it! Turn this into daily habit</p>
                </div>
        ) : (
            <div className = "">
                <p className="text-center">{vocablist[five].english}</p>
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
