//import React, { useState, useEffect } from 'react';
import React,{useState,useEffect} from 'react';
import HeaderHooks from './HeaderHooks';

function CounterHooks(props) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
   // document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {console.log(props,"hooks")}
      <HeaderHooks />
    </div>
  );
}
export default CounterHooks;