import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIGNUP } from '../redux/actionType'

const initialState = {
  name : "",
  email : "",
  password : ""
}


const Signup = () => {

  const [formData,setFormdata] = useState(initialState)
  const {name,email,password} = formData


  const datafromstore = useSelector((state)=>state.Auth)
  console.log(datafromstore)
  
  const dispatch = useDispatch();

  const handleChange=(e)=>
  {
    setFormdata({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)

    axios.post('http://localhost:3000/auth',{...formData,role:'user'})
    .then((res)=>{
      console.log(res)
      dispatch({type:SIGNUP,payload:formData})
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div>

        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={name} name='name'  onChange={(e)=>handleChange(e)} placeholder='Enter Your Name' /> <br />
            <input type="email" value={email} name='email'  onChange={(e)=>handleChange(e)} placeholder='Enter Your Email' /> <br />
            <input type="password" value={password} name='password'  onChange={(e)=>handleChange(e)} placeholder='Enter Your Password' /> <br />
            <input type="submit" />
        </form>

    </div>
  )
}

export default Signup