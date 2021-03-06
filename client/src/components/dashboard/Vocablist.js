import React from 'react'
import { connect } from 'react-redux'
import { vocablist } from '../../actions/auth'
import PropTypes from 'prop-types'

function Vocablist({ vocablist, list, auth: {user}}) {
    vocablist()
    console.log()

    //Comment section
    //here I was trying add "NEW" button to add new words. And also, search button to search words. All this logic would be done on postgresql:)
    return (
        <div> 
            <div class="w-full flex flex-wrap">
                <div class=" border-2 p-1 border-gray-400 t w-full md:w-1/2 lg:w-1/4">dfgdfg</div>
                <div class=" border-2 p-1 border-gray-400 w-full md:w-1/2 lg:w-1/4 ">korean word</div>
                <div class=" border-2 p-1 border-gray-400 w-full lg:w-1/2">english example sentence</div>
            </div>
        </div>
    )
}

Vocablist.propTypes = {
    vocablist: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps =(state)=> ({
    auth: state.auth,
    list: state.auth.listOfVocab
})

export default connect(mapStateToProps, {vocablist})(Vocablist)
