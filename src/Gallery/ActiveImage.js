import React, { useState } from 'react'

import useGallery from './useGallery'

const ActiveImage = () => {
  const { activeImage } = useGallery()
  const [hasLoaded, setHasLoaded] = useState(false)

  const imgClassName = !hasLoaded ? 'loading' : ''

  return (
    <div className="active-img">
      <img className={imgClassName} src={activeImage} onLoad={() => setHasLoaded(true)}/>
    </div>
  )
}

export default ActiveImage