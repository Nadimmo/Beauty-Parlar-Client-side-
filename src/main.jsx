import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './components/Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={Route} />
      </AuthProvider>
  </StrictMode>,
)
