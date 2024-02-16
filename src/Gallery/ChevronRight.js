import React from 'react'

import useGallery from './useGallery'

const Svg = () => (
  <svg width="11.6895" height="16.9629">
    <path d="M11.6895 8.47656C11.6895 8.23242 11.5918 8.00781 11.4062 7.83203L3.67188 0.253906C3.49609 0.0878906 3.28125 0 3.02734 0C2.5293 0 2.13867 0.380859 2.13867 0.888672C2.13867 1.13281 2.23633 1.35742 2.39258 1.52344L9.50195 8.47656L2.39258 15.4297C2.23633 15.5957 2.13867 15.8105 2.13867 16.0645C2.13867 16.5723 2.5293 16.9531 3.02734 16.9531C3.28125 16.9531 3.49609 16.8652 3.67188 16.6895L11.4062 9.12109C11.5918 8.93555 11.6895 8.7207 11.6895 8.47656Z" fill="black" />
  </svg>
)

const useClassName = () => {
  const { activeImageIndex, activeSection } = useGallery() 
  const isLastImage = activeImageIndex >= activeSection.images.length - 1
  return 'chevron chevron-right' + (isLastImage ? ' inactive' : '')
}

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