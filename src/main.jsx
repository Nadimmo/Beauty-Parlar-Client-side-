import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './components/Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
      <RouterProvider router={Route} />
      </AuthProvider>
     </QueryClientProvider>
  </StrictMode>,
)
