import React from 'react'

import useGallery from '../../../useGallery'
import useOnKeyDown from './useOnKeyDown'

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

export default Bullet