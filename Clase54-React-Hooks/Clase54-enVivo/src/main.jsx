import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom' 
import LastMoviesDb from './components/LastMoviesDb.jsx'
import ContentWrapper from './components/ContentWrapper.jsx'
import GenresInDb from './components/GenresInDb.jsx'
import Movie from './components/Movie.jsx'
import SearchMovies from './components/SearchMovies.jsx'
import Error404 from './components/error404.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    
    children:[{
      path:'/',
      element:<ContentWrapper/>
    },
    {
      path:'/genres',
      element:<GenresInDb />
    },
    {
      path:'/last-movie',
      element:<LastMoviesDb />
    },
    {
      path:'/movies',
      element:<Movie />
    },
    {
      path:'/search',
      element:<SearchMovies/>
    },
    {
      path:'*',
      element:<Error404/>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
