// Importing basic required methods and components
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing Global CSS
import './index.css'

// Importing Components
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services.jsx'
import About from './components/pages/About.jsx'
import ContactUs from './components/pages/ContactUs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/services",
            element: <Services />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <ContactUs />,
        },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
