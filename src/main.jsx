import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import "./assets/styles/global.css"
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import "./i18n.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
