import { useState } from "react";
export default function Counter() {
  const [num, setnum] = useState(0);
 
  function Primenum() {
    // let number = { num };
    let factor = 0;

    for (let i = 0; i <=num; i++) {
      if (num % i == 0) {
        factor++;
      }
     
    }
    if (factor == 2) {
     console.log("Prime")
     return true
    } else {
      console.log("Not Prime Number")
      return false
    }
  }

  return (
    <div className="main">
      <h1 style={{color:"#fff"}}>Welcome to Counter 2.0</h1>
      <button disabled={num == 0} onClick={() => setnum(num - 1)}>
        -1
      </button>
      <button onClick={() => setnum(num + 1)}>+1</button>
      <br></br>
      <button onClick={() => setnum(0)}>Reset</button>

      <p style={{fontSize:"20px",color:"#fff"}}>Count: {num}</p>
      <p style={{fontSize:"20px",color:"#fff"}}>This Number is : {num % 2 == 0 ? "Even" : "Old"}</p>
      <p  style={{fontSize:"20px",color:"#fff"}}>Prime Number : {Primenum() ? "True" : "False"}</p>
    </div>
  );
}