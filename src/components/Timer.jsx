// Maching Coding - 3 :
// ==============
// 1. Create a react component that displays a timer with initial value 0.
// 2. There should be two buttons one to start/stop, and other to reset timer.
// 3. Clicking on start will start timer from 0 and increase timer value by 1 for every second and button text should change to "stop".
// 4. Clicking on stop will pause the timer and change button text to "start".
// 5. Now click on start then timer should continue from paused value.
// 6. Clicking on reset will reset the timer to initial value 0.



import React, { useEffect, useState } from 'react'

export default function Timer() {

    const [timerHandler, setTimerHandler] = useState(false)
    const [getSec, setSec] = useState(0)
    const [getMin, setMin] = useState(0)

    useEffect(() =>{
        let interval;
        if(timerHandler){
            interval = setInterval(() =>{
                if(getSec < 59){
                    setSec((prevSec) => prevSec+1)
                }else{
                    setMin((prevMin) => prevMin+1)
                    setSec(0)
                }
            },1000)
        }else{
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
    },[timerHandler, getSec, getMin])

    const handleStartStop = ()=>{
        setTimerHandler((prevState) => !prevState)
    }
 

    const handleReset = () =>{
        setTimerHandler(false)
        setMin(0)
        setSec(0)
    }
  return (
    <div>
      <h1>Machine Coding 2</h1>
      <h1>{getMin} Min {getSec} Sec</h1>
      <button onClick={handleStartStop}>{timerHandler? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
