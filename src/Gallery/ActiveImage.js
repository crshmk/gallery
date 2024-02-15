import React, { useEffect, useState } from 'react'

import useGallery from './useGallery'

import imagePlaceholder from '../assets/img/image-placeholder.png'

const ActiveImage = () => {
  const { activeImage, activeImageIndex } = useGallery()
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(false)
  }, [activeImageIndex])

  const imgClassName = !hasLoaded ? 'loading' : ''

  return (
    <div className="active-img">
      {!hasLoaded && <img className="loading-placeholder" src={imagePlaceholder} />}
      <img 
        className={imgClassName} 
        src={activeImage} 
        onLoad={() => setHasLoaded(true)}
      />
    </div>
  )
}

export default ActiveImage