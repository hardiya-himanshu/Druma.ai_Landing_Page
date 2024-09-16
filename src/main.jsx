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
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'
import Privacy_Policy from './components/pages/Privacy_Policy.jsx'
import Terms_Of_Use from './components/pages/Terms_Of_Use.jsx'
import Cancellations from './components/pages/Cancellations.jsx'
import Reset_Password from './components/pages/Reset_Password.jsx'


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
        {
            path: "/cancellations",
            element: <Cancellations />,
        },
        {
            path: "/terms-of-use",
            element: <Terms_Of_Use />,
        },
        {
            path: "/privacy-policy",
            element: <Privacy_Policy />,
        },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset-password",
    element: <Reset_Password />,
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
