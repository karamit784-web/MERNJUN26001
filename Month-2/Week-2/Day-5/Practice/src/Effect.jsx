import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Effect() {

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

      // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

    //case 1
    //It will execute at every render
    //useEffect(()=>{
    //  console.log("at every render")
    //    })

    //case 2
    //It will execute at first render
    //useEffect(() => {
    //  console.log("at first render");
    //    }, []);

    //case 3
    //based dependent
    useEffect(() => {
        console.log("based on dep");

        return () => {
        console.log("value removed")
    }
    }, [count]);

    return () => {
        console.log("value removed")
    }
  return (
    <div>
      Effects
      <br />
      <button onClick={() => setCount(count + 1)}>inc {count}</button>
      <button onClick={() => setTotal(total + 1)}>Total inc {total}</button>
    </div>
  )
}

export default Effect;
