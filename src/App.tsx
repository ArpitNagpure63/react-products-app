import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'

const Login = React.lazy(() => import('./Login/Login'));
const Products = React.lazy(() => import('./Products/Products'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Suspense>
  )
}

export default App
