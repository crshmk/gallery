import React from 'react'

import './bullets.css'

import useBullets from './useBullets'

const Bullets = () => {
  const bullets = useBullets() 
  
  return (
    <div className="bullets">
      {bullets}
    </div>
  )
} 

export default Bullets 