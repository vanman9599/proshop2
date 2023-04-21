import React, {useState, useRef, useEffect} from 'react'
import {Button,Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Searchbox() {

const navigate = useNavigate();
const [keyword, setKeyword] = useState('')
const submitHandler =(e)=>{
    e.preventDefault()
    if(keyword){
      navigate(`/?keyword=${keyword}`)
    }
}


  return (
    <div>
        <form onSubmit={submitHandler} inline  >
    
    <input   type="text" id="q"  name="q" placeholder="Search" onChange={(e) => setKeyword(e.target.value)}
    className="mr-sm-2 ml-sm-5">
      
    </input>
    
  
   </form>
    </div>
 
  )
}

export default Searchbox
