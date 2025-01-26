import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import PostListPage from './Pages/PostListPage'
import SinglePostPage from './Pages/SinglePostPage'
import Write from './Pages/Write'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import {ClerkProvider} from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/posts',
        element: <PostListPage />
      },
      {
        path: '/:slug',
        element: <SinglePostPage />
      },
      {
        path: '/write',
        element: <Write />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <SignUpPage />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={routes}></RouterProvider>
  </ClerkProvider>

)
