import React, { useState } from 'react'
import { SIGNIN } from '../redux/actionType'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'



const initialState = {
  email : "",
  password :""
  
}

const SignIn = () => {

    const [formData,setFormdata] = useState(initialState)
    
    const {email,password} = formData

    const {currentUser} = useSelector((state)=>state.Auth)
    console.log(currentUser)

    const dispatch = useDispatch()
  
    const handleChange=(e)=>
    {
      setFormdata({...formData,[e.target.name]:e.target.value})
    }

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get('http://localhost:3000/auth')
    .then((res)=>{  
      // console.log(res.data)
      const userArray = res.data
      const currentUser = userArray.find((el)=>el.email == email && el.password == password)
      console.log(currentUser)
      dispatch({type:SIGNIN,payload:currentUser})
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type="email" value={email} name='email' onChange={handleChange} placeholder='Enter Your Email' /> <br />
            <input type="password" value={password} name='password' onChange={handleChange} placeholder='Enter Your Password' /> <br />
            <input type="submit" />
        </form>

    </div>
  )
}

export default SignIn