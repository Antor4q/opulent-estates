import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routes/Route';
import FirebaseContext from './routes/FirebaseContext';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
      
    </FirebaseContext>
  </React.StrictMode>,
)
