import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import useFetch from './usefetch';
import ReactDOM from 'react-dom'

function App() {

  const [time, set_time] = useState("");
  const [date, set_date] = useState("");
  const [seconds, setSeconds] = useState(0);
  
  const [minutes, setMinutes] = useState("00");
  const [hours, setHours] = useState("00");
   const [isActive, setIsActive] = useState(false);
  //const [toggle_income_expense, set_toggle_income_expense] = useState('expense')
   // const { transactionlist: income_list, error_income } = useFetch('http://localhost:8000/income/');
  //const { transactionlist: time_date, error_expenses } = useFetch('https://ps8xsphe3f.execute-api.ap-southeast-1.amazonaws.com/default/http-get-time');
  
   function Updatetime()
 {
  
    console.log("hereh is t")

    fetch('https://ps8xsphe3f.execute-api.ap-southeast-1.amazonaws.com/default/http-get-time')
    .then(res =>{
      if(!res.ok){
        throw Error('clound not fetch the data from the server')
      }
      return res.json();
    })
    .then(data =>{
        // settransactionlist(data);
        // seterror(null);
        console.log(data)
        set_time( data.time);
        set_date(data.date)
        setSeconds(parseInt(data.seconds))
        setMinutes(data.minutes)
        setHours(data.hours)
        setIsActive(true);
    })
    .catch(err => {
      console.log(err);
      set_time("Server Out !");
      //seterror(err.message) ;
      //settransactionlist(null)
    })
   
   
 }


 function UpdateRealTime()
 {
  
    console.log("hereh is t")

    fetch('https://ps8xsphe3f.execute-api.ap-southeast-1.amazonaws.com/default/http-get-time')
    .then(res =>{
      if(!res.ok){
        throw Error('clound not fetch the data from the server')
      }
      return res.json();
    })
    .then(data =>{
      
        setMinutes(data.minutes)
        setHours(data.hours)
        setSeconds(parseInt(data.seconds))
        setIsActive(true);
    })
    .catch(err => {
      console.log(err);
      set_time("Server Out !");
      //seterror(err.message) ;
      //settransactionlist(null)
    })
   
   
 }

 function StopButton(){

  setIsActive(false);
 }
 



  function toggle() {
    setIsActive(!isActive);
  }

 

  useEffect(() => {
    let interval = null;
    if (isActive && seconds < 60) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
     
      }, 1000);
    } else if (isActive && seconds == 60) {
         setSeconds(0);
         UpdateRealTime();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  return (
    <div className="App">
     <div className="button_wrapper">

       <button className='update-button' onClick={Updatetime}>Click here to update the time</button>
     </div>
     <div className="display-real-time-wrapper">{time}</div>
     <div className="display-real-date-time-wrapper">{date}</div>
     <div className="display-time-changed-wrapper">
       <div className="inside-real-time">
        <div className="inside-real-time-header-title">REAL TIME CLOCK</div>
         <div className="inside-real-time-in">
          <div className="hours-in">{hours}</div>
          <div className="hours-in">:</div>
          <div className="hours-in">{minutes}</div>
          <div className="hours-in">:</div>
        <div className="hours-in">{seconds<10? ('0'+seconds):seconds} </div>
        </div>
       </div>
     </div>
     <button className='update-button-stop' onClick={StopButton}>Stop</button>
    </div>
  );
}

export default App;

/*

{seconds < 10 &&
          <div className="hours-in">0{seconds}</div>
        }
        {seconds > 9 &&
          <div className="hours-in">{seconds}</div>
        }


        */