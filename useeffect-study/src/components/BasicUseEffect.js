import React,{useState,useEffect} from 'react'

const BasicUseEffect = () => {

    const [value,setValue]=useState(0);

    useEffect(()=>{
        console.log("Running Effect");
        document.title =`New Message (${value})`
    })
    console.log("render component.");
  return (
    <div>
        <h2>New Messages {value}</h2>
        <button 
        onClick={()=>setValue(value + 1)}
        className='btn'>Click me</button>
    </div>
  )
}

export default BasicUseEffect