import React from 'react'

import temple from './assets/img/laos-temple.jpg'

const Bullet = () => (
  <div className="bullet" style={{backgroundImage: `url(${temple})`}}>
    
  </div>
)

const Label = () => (
  <div className="label">
      <span>01 / 04</span>
      <span>Section</span>
  </div>
)

const Page = () => (
  <div className="gallery">
    <div className="active-img">
    <img src={temple} />
    </div>
    <div className="bullets">
      <Bullet />
      <Bullet />
      <Bullet />
      <Bullet />
    </div>
    <Label />
  </div>
)

export default Page