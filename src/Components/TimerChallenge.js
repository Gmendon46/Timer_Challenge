import React,{useState, useRef} from 'react'
import ResultModal from './ResultModal'


function TimerChallenge({title, targetTime}) {
  const timer = useRef()
  const dialog = useRef()
  
  const[timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000
  
 if(timeRemaining <= 0) {
  clearInterval(timer.current)
  dialog.current.open()
 }

 function handleReset(){
  setTimeRemaining(targetTime * 1000)
 }

  function handleStart(){
  timer.current = setInterval(()=> {
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
  },
  10)
 }

 function handleStop() {
  dialog.current.open()
  clearInterval(timer.current)
 }
 
  return (
    <>
    <ResultModal ref={dialog} targetTimer={targetTime} remainingTime={timeRemaining} onReset = {handleReset} result={'lost'}/>
    <section className='challenge'>
    <h2>{title}</h2>
    <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <p>
        <button onClick={timerisActive? handleStop : handleStart}> 
            {timerisActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerisActive ? 'active' : undefined}>
           {timerisActive ? "Time is running" : "Timer inactive"}
        </p>
    </p>
  </section>
    </>
    
  )
}

export default TimerChallenge