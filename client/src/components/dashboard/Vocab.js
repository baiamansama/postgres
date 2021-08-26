import React, {useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { vocab } from '../../actions/vocab'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

function Vocab({ vocablist, vocab, auth: {user}}) {
    const [show, setShow] = useState(false)
    const [five, setFive] = useState(0)
    const isKnown = (e) => {
        e.preventDefault()
        let example1 = {isKnown: true, vocab_id: vocablist[five].vocab_id}
        const {isKnown, vocab_id} = example1
        vocab(isKnown, vocab_id)
        setFive(five+1)
        }
    const unKnown = (e) => {
        e.preventDefault()
        let example = {isKnown: false, vocab_id: vocablist[five].vocab_id}
        const {isKnown, vocab_id} = example
        vocab(isKnown, vocab_id)
        setFive(five+1)   
    }
    console.log(vocablist)
    const handleClick = () => {
        setShow(true)
    }
    return (
        <div>
            {show ? (<div>
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
        </div>):(
        <div>
        <button onClick={handleClick} class="bg-purple-300 p-2 rounded-2xl hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
         view my 5 words of a the day
        </button>
        <div className="p-2 bg-green-300 rounded-xl mt-3 text-center">
            <Link to='/vocablist'>go to vocablist</Link>
        </div>
        </div>
        )}
        </div>
        
    )
}

Vocab.propTypes = {
    vocab: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps =(state)=> ({
    auth: state.auth
})


export default connect(mapStateToProps, {vocab})(Vocab)
