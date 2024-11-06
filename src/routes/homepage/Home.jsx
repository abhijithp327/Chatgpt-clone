import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homepage'>
  <div className="left">
    <h1>Dev AI Chat</h1>
    <h2>Start your journey with us now</h2>
    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis quibusdam?</h3>
    <button>Get Started</button>
  </div>
  <div className="right"></div>
    </div>
  )
}

export default Home;