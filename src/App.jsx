import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pengacara from './pages/Pengacara'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/pengacara',
      element: <Pengacara />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
