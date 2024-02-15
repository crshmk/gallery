import React, { lazy } from 'react'

const Gallery = lazy(() => import('./Gallery') )

import './index.css'

const App = () => 
  <Gallery />

export default App

