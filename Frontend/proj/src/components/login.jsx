/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './signup.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.prenventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success") {
                navigate('/home')
            }
        })
        
        .catch(err => console.log(err))
        
    }
  return (
    <form className='containerr' onSubmit={handleSubmit}>
    <h3>Log In</h3>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
        <a href="/Home"> Home</a>
    </div>
    <p className="forgot-password text-right">
      Forgot <a href="/signup">password?</a>
    </p>

  </form>
  )
}
