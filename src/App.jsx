
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/onboarding'
import MyJobs from './pages/my-jobs'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import SavedJobs from './pages/saved-job'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([

  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },

      {
        path: '/onboarding',

        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        )
      },

      {
        path: '/JobPage',
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        )


      },
      {
        path: '/onboarding',
        element:
          (
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          )



      },
      {
        path: '/job/:id',
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        )


      },
      {
        path: '/post-job',
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        )

      },
      {
        path: '/saved-job',
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        )

      },
      {
        path: '/my-jobs',
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        )


      },

    ]
  }
])

function App() {


  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
