import React from 'react'

import useGallery from './useGallery'

const useOnKeyDown = (i) => {
  const { decrement, increment, setActiveImageIndex } = useGallery()
  
  const onKeyDown = e => {
    if(e.key === 'Enter') {
      setActiveImageIndex(i)
      return 
    } 
    if(e.key === 'ArrowLeft') {
      decrement()
      return 
    } 
    if(e.key === 'ArrowRight') {
      increment()
      return 
    }
  }
  return onKeyDown
}

const Bullet = ({ image, i }) => {
  const { activeImageIndex, changeImage } = useGallery()

  const onKeyDown = useOnKeyDown(i)

  const className = 'bullet' + (activeImageIndex === i ? ' active' : '')

  return (
    <div 
      className={className}
      onClick={changeImage(i)} 
      style={{backgroundImage: `url(${image})`}} 
      tabIndex={0}
      onKeyDown={onKeyDown}
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