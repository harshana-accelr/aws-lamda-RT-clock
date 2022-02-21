import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

const useFetch = (url) => {

 
    const[transactionlist , settransactionlist] = useState(null);
    const[error , seterror] = useState(null);
   

    useEffect(()=>{

        fetch(url)
        .then(res =>{
          if(!res.ok){
            throw Error('clound not fetch the data from the server')
          }
          return res.json();
        })
        .then(data =>{
             settransactionlist(data);
             seterror(null);
        })
        .catch(err => {
          console.log(err);
          seterror(err.message) ;
          settransactionlist(null)
        })
    
      } ,[url]) ;

      return {transactionlist , error}
}
 
export default useFetch;