import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ActiveImage from './ActiveImage'
import Bullets from './Bullets'
import Label from './Label'
import Menu from './Menu'

import { GalleryProvider } from './useGallery' 

const Gallery = () => (
  <div className="gallery">
    <GalleryProvider>
      <Menu />
      <ActiveImage />
      <Bullets />
      <Label />
    </GalleryProvider>
  </div>
)

const GalleryRoute = () => (
  <Routes>
    <Route path="/gallery/:activeSectionLabel" element={<Gallery />} />
  </Routes>
)

export default GalleryRoute