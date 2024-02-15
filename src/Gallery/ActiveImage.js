import React from 'react'

import useGallery from './useGallery'

const ActiveImage = () => {
  const { activeImage } = useGallery()

  return (
    <div className="active-img">
      <img src={activeImage} />
    </div>
  )
}

export default ActiveImage