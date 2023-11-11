import React,{useState} from 'react'

function HeadColor() {
  
    const[headercolor, setHeaderColor] = useState('white')
    const headColor = (color:string) =>{
        setHeaderColor(color)
    }
  
    return (
    <div>
        <h1 style={{color:headercolor}}>Hello</h1>
        <button onClick={()=> headColor('red')}>red</button>
        <button onClick={()=>headColor('yellow')}>Yellow</button>
        <button onClick={()=> headColor('blue')}>blue</button>
    </div>
  )
}

export default HeadColor