import React from 'react'

import useGallery from './useGallery'

const Label = () => {
  const { activeSection, activeImageIndex } = useGallery()

  const numImages = activeSection.images.length 

  return (
    <div className="label">
        <span>{activeImageIndex + 1} / {numImages}</span>
        <span>{activeSection.label}</span>
    </div>
  )
}

export default Label 