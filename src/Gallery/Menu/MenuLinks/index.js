import React from 'react'

import { imageSectionTitles } from '../../imageSections'

import MenuLink from './MenuLink'

const menuLinks = imageSectionTitles.map(sectionTitle => 
  <MenuLink sectionTitle={sectionTitle} />
)

const MenuLinks = () => (
  <>
    {menuLinks}
  </>
)

export default MenuLinks