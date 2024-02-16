import React, { useEffect, useState } from 'react'

import useGallery from './useGallery'

import imagePlaceholder from '../assets/img/image-placeholder.png'

import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'

const ActiveImage = () => {
  const { activeImage, activeImageIndex, decrement, increment } = useGallery()
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(false)
  }, [activeImageIndex])

  const imgClassName = !hasLoaded ? 'loading' : ''

  return (
    <div className="active-img">
      <ChevronLeft onClick={decrement} />
      {!hasLoaded && <img className="loading-placeholder" src={imagePlaceholder} />}
      <img 
        className={imgClassName} 
        src={activeImage} 
        onLoad={() => setHasLoaded(true)}
      />
      <ChevronRight onClick={increment} />
    </div>
  )
}

export default ActiveImage