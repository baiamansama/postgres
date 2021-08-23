import Vocab from './Vocab'
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
function Dashboard({ auth: { user }}) {
  const [vocablist, setVocablist] = useState('')
  useEffect(async() =>{
    await axios.get('http://localhost:5000/api/dashboard/vocab').then((res) => setVocablist(res.data))
  },[])
  console.log(user)
  return (
    <div>
      {vocablist.length === 0 ? (<p>Pending</p>) : (
    <div className="m-5">
      <div className="flex flex-wrap space-x-5">
        <div className="flex-initial p-4 m-2 bg-indigo-100 border-4 border-indigo-200">
          <p>set date</p>
        </div>
        <div className="flex-initial m-2 p-4 bg-indigo-100 border-4 border-indigo-200 h-40">
          <p>Beginner course</p>
          <p>You have completed <span className="py-2 text-red-500">80%</span> of the course</p>
          <a href="#" className=" flex-initial items-center bg-green-200 rounded-2xl px-2 hover:bg-green-400"> Resume </a>
        </div>
        <div className="flex-initial p-4 m-2 bg-indigo-100 border-4 border-indigo-200">
          <Vocab vocablist = {vocablist}/>
      </div> 
      </div>
    </div>
      )}
      </div>
  );
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Dashboard);
