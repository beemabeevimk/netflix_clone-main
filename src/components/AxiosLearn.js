import React,{useState} from 'react'
import axios from 'axios'

const AxiosLearn = () => {
  const [data,setData]=useState([])
    return (
    <div className='axios'>

    <button onClick={()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((resp)=>{
            console.log(resp.data)
            setData(resp.data) 
        })
    }}  type='button'>click me </button>

{data.map((obj,index)=>{
    return(
        <>
        <h1>{index}</h1>
        <h4>{obj.title}</h4>        
        </>
    )
})}
    </div>
  )
}

export default AxiosLearn