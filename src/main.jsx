import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './components/Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={Route} />
  </StrictMode>,
)
