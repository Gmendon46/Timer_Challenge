import React, {useState, useRef} from 'react'

function Player() {
  const playername = useRef()

  const[enteredPlayerName, setEnteredPlayerName] = useState()

  const handleClick = () =>{
    setEnteredPlayerName(playername.current.value)
  }
    return (
    <section id='player'>
        <h2>Hello {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
        <p>
        <input type="text" ref={playername} placeholder='Enter Plater Name' />
        <button onClick={handleClick}>Enter</button>
        </p>
    </section >
  )
}

export default Player