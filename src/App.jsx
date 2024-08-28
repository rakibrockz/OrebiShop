import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './component/page/Home';
import Product from './component/page/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
