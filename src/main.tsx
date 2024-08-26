import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './context/store.tsx'
import { Toaster } from 'react-hot-toast';

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes/allRouters.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </Provider>
)
