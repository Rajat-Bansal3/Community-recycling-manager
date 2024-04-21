import React from 'react'
import './Hero.css'
import aroow from '../../assets/aroow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      <h1>Lets save the earth</h1>
      <p>This project aims to foster a culture of recycling and environmental responsibility.</p>
      <button className='btn'>Explore More <img src={aroow} alt="" /></button>  
      </div> 
    </div>
  )
}

export default Hero