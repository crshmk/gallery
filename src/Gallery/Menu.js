import React from 'react'
import { Link } from 'react-router-dom'

import imageSections, { imageSectionTitles } from './imageSections'

const MenuLink = ({ sectionTitle }) => 
  <li><Link to={`/gallery/${sectionTitle}`}>{sectionTitle}</Link></li>

const MenuLinks = () => imageSectionTitles.map(sectionTitle => 
  <MenuLink sectionTitle={sectionTitle} />
)

const Menu = () => {

  return (
    <div className="gallery-menu">
      <ul>
        <MenuLinks />
      </ul>
    </div>
  )
}

export default Menu