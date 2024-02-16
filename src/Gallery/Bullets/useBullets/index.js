import React from 'react'

import useGallery from '../../useGallery'

import Bullet from './Bullet'

const useBullets = () => {
  const { activeSection } = useGallery()
  const images = activeSection.images

  return images.map((image, i) => <Bullet image={image} i={i} />)
}

export default useBullets