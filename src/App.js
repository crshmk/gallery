import React, { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'

const Gallery = lazy(() => import('./Gallery') )

import './index.css'

const App = () => (
  <BrowserRouter>
    <Gallery />
  </BrowserRouter>
)

export default App

