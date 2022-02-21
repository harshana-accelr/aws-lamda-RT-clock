import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import useFetch from './usefetch';
import ReactDOM from 'react-dom'

function App() {

  const [time, set_time] = useState("");
  const [toggle_income_expense, set_toggle_income_expense] = useState('expense')
   // const { transactionlist: income_list, error_income } = useFetch('http://localhost:8000/income/');
  
   const Updatetime =()=>
 {
    const { transactionlist: time_date, error_expenses } = useFetch('https://ps8xsphe3f.execute-api.ap-southeast-1.amazonaws.com/default/http-get-time');
    //const time = time_date.time;
    //console.log(time_date.time)
    //set_time( time_date.time);
    console.log("hereh is t")

  

 }
 
  return (
    <div className="App">
     <div className="button_wrapper">

       <button className='update-button' onClick={Updatetime}>Click here to update the time</button>
     </div>
     <div className="display-real-time-wrapper">{time}</div>
    </div>
  );
}

export default App;
