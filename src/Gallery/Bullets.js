import React from 'react'

import useGallery from './useGallery'

const Bullet = ({ image, i }) => {
  const { activeImageIndex, changeImage } = useGallery()

  const className = 'bullet' + (activeImageIndex === i ? ' active' : '')

  return (
    <div 
      className={className}
      onClick={changeImage(i)} 
      style={{backgroundImage: `url(${image})`}} 
    />
  )
}

const useBullets = () => {
  const { activeSection } = useGallery()
  const images = activeSection.images

  return images.map((image, i) => <Bullet image={image} i={i} />)
}

const Bullets = () => {
  const bullets = useBullets() 
  
  return (
    <div className="bullets">
      {bullets}
    </div>
  )
} 

export default Bullets 