import React from 'react'
import { Link } from 'react-router-dom'

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

export default MenuLink