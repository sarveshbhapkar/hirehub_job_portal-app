
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

const router = createBrowserRouter([

  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      },

      {
        path:'/onboarding',
        element:<Onboarding/>
      },

      {
        path:'/job',
        element:<JobListing/>
      },
      {
        path:'/onboarding',
        element:<Onboarding/>
      },
      {
        path:'/job/:id',
        element:<JobPage/>
      },
      {
        path:'/post-job',
        element:<Onboarding/>
      },
      {
        path:'/saved-job',
        element:<SavedJobs/>
      },
      {
        path:'/my-jobs',
        element:<MyJobs/>
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
