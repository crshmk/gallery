import React from 'react'

import useClassName from './useClassName'
import useGallery from '../../useGallery'

import Svg from './Svg'

const ChevronLeft = () => {
  const { decrement } = useGallery() 
  const className = useClassName()

  const onKeyDown = e => 
    e.key === 'Enter' && decrement()

  return (
    <div 
      className={className}
      onClick={decrement} 
      tabIndex={0} 
      onKeyDown={onKeyDown}
    >
      <Svg />
    </div>
  )
}

export default ChevronLeft