import React from 'react'

import useClassName from './useClassName'
import useGallery from '../../useGallery'

import Svg from './Svg'

const ChevronRight = () => {
  const { increment } = useGallery() 
  const className = useClassName()

  const onKeyDown = e => 
    e.key === 'Enter' && increment()

  return (
    <div 
      className={className} 
      onClick={increment} 
      tabIndex={0} 
      onKeyDown={onKeyDown}
    >
      <Svg />
    </div>
  )
}

export default ChevronRight