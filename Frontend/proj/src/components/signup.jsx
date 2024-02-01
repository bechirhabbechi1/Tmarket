/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './signup.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.prenventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {
            console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
        <form className='containerr' onSubmit={handleSubmit}>
    <h3>Sign Up</h3>

    <div className="mb-3">
      <label>User name </label>
      <input
        type="text"
        className="form-control"
        placeholder="User name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="mb-3">
      <label>Email address </label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label>Password </label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <a href="/Home"> Home</a>
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/login">Log in?</a>
    </p>
  </form>
  </div>
  )
}

export default signup