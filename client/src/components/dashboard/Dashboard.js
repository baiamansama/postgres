import Vocab from './Vocab'
import React, {useEffect, useState} from 'react';
import ProgressBar from './Progress';
import SetDate from './setDate';
import axios from 'axios'
function Dashboard() {
  const [vocablist, setVocablist] = useState({})
  useEffect(async () =>{
    console.log('useEffect')
    await axios.get('http://localhost:5000').then((res) => setVocablist(res.data))
  },[])
  return (
    <div className="m-5">
      <div className="flex flex-wrap space-x-5">
        <div className="flex-initial p-4 m-2 bg-indigo-100 border-4 border-indigo-200">
          <SetDate />
        </div>
        <div className="flex-initial m-2 p-4 bg-indigo-100 border-4 border-indigo-200 h-40">
          <p>Beginner course</p>
          <ProgressBar progressPercentage={80} />
          <p>You have completed <span className="py-2 text-red-500">80%</span> of the course</p>
          <a href="#" className=" flex-initial items-center bg-green-200 rounded-2xl px-2 hover:bg-green-400"> Resume </a>
        </div>
        <div className="flex-initial p-4 m-2 bg-indigo-100 border-4 border-indigo-200">
          <Vocab vocablist = {vocablist}/>
      </div> 
      </div>
    </div>
  );
}

export default Dashboard;
