import React from 'react'
import { Link } from 'react-router-dom'

import { imageSectionTitles } from './imageSections'

const MenuLink = ({ sectionTitle }) => {
  const label = sectionTitle.replace('-', ' ')
  return (
    <li>
      <Link to={`/gallery/${sectionTitle}`}>
        {label}
      </Link>
    </li>
  )
}

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