import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import imageSections from './imageSections'

const GalleryContext = createContext()
const useGallery = () => useContext(GalleryContext)

const getActiveSection = label => imageSections.find(imageSection => 
  imageSection.label === label  
)

const useActiveSection = () => {
  const { activeSectionLabel } = useParams()

  return getActiveSection(activeSectionLabel)
}

export const GalleryProvider = ({ children }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeSection = useActiveSection()

  useEffect(() => {
    setActiveImageIndex(0)
  }, [activeSection.label])

  const activeImage = activeSection.images[activeImageIndex]

  const changeImage = i => () => setActiveImageIndex(i) 

  const ctx = {
    activeImage, 
    activeImageIndex,
    activeSection,
    changeImage, 
    setActiveImageIndex,
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