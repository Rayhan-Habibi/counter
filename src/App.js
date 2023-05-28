import  "./App.css"
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function increase(){
    setCounter(increaseCount => increaseCount + 1);
  }
  function decrease(){
    setCounter(decreseCount => decreseCount - 1);
  }
  function reset(){
    setCounter(resetCount => resetCount = 0)
  }
  return (
<div className="">
<div className="counter">
        <button onClick={decrease}>-</button>
        <h1>{counter}</h1>
        <button onClick={increase}>+</button>
    </div> 
    <div className="button">
    <button className="reset" onClick={reset}>Reset</button>
    </div>
</div>

    
    
  );
}

export default App;
