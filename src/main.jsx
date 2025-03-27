import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/index.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
  )
