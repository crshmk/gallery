import React from 'react'

import ActiveImage from './ActiveImage'
import Bullets from './Bullets'
import Label from './Label'
import { GalleryProvider } from './useGallery' 

const Gallery = () => (
  <div className="gallery">
    <GalleryProvider>
      <ActiveImage />
      <Bullets />
      <Label />
    </GalleryProvider>
  </div>
)

export default Gallery