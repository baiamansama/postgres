import React, {useState} from 'react'
import { connect } from 'react-redux'
import { vocablist } from '../../actions/vocab'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

function Vocablist({ vocablist, list, auth: {user}}) {
    vocablist()
    console.log(list)
    return (
        <div>
            <p>hidhf</p>
        </div>
    )
}

Vocablist.propTypes = {
    vocablist: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps =(state)=> ({
    auth: state.auth,
    list: state.vocab.listOfVocab
})

export default connect(mapStateToProps, {vocablist})(Vocablist)
