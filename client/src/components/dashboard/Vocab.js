import React, {useState} from 'react'
export default function Vocab() {
    const [five, setFive] = useState(0)
    const vocablist = [
        {
            value: 'spontanous1',
            isKnown: true
        },
        {
            value: 'spontanous2',
            isKnown: true
        },
        {
            value: 'spontanous3',
            isKnown: true
        },
        {
            value: 'spontanous4',
            isKnown: true
        },
        {
            value: 'spontanous6',
            isKnown: true
        },        {
            value: 'spontanous7',
            isKnown: true
        },
    ]
    const isKnown = () => {
         setFive(five+1)
        }
    const unKnown = () => {
        vocablist[five].isKnown = false
        setFive(five+1)
    }
    return (
        <div>
            {five === 4 ? (
                <div className= "text-center"> 
                    <p>🥳🥳🥳</p>
                    <p>You did it! Turn this into daily habit</p>
                    {console.log(vocablist)}
                </div>
        ) : (
            <div className = "">
                <p className="text-center">{vocablist[five].value}</p>
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