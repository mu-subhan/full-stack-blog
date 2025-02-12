import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './routes/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import Write from './routes/Write.jsx'
import PostListPage from './routes/PostListPage.jsx'
import HomePage from './routes/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { ClerkProvider } from '@clerk/clerk-react'
import SinglePostPage from './routes/SinglePostPage'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element:<MainLayout/>,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ]
  }
],

)
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>

    </QueryClientProvider>
   </ClerkProvider>
  </StrictMode>,
)
