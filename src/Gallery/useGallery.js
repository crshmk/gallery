import React, { createContext, useContext, useState } from 'react'

import imageSections from './imageSections'

const GalleryContext = createContext()
const useGallery = () => useContext(GalleryContext)

export const GalleryProvider = ({ children }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const activeSection = imageSections[activeSectionIndex]
  const activeImage = activeSection.images[activeImageIndex]

  const changeImage = i => () => setActiveImageIndex(i) 

  const ctx = {
    activeImage, 
    activeImageIndex,
    activeSection,
    changeImage, 
    setActiveSectionIndex,
    imageSections 
  }

  return (
    <GalleryContext.Provider value={ctx}>
      {children}
    </GalleryContext.Provider>
  )
}

export default useGallery