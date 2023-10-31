import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home, Product, Movies, AboutPage, ContactPage,Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import Userpage from './pages/Userpage';
import Search from './pages/Search';
import Movie from './components/Movie';
import Seats from './pages/Seats';
import Payments from './pages/Payments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/movies" element={<Movies />} />
        
        <Route path="/seats" element={<Seats />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<Search  />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payments" element={<Payments />} />
        {/* 
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} /> */}
        
      </Routes>
    </Provider>
  </BrowserRouter>
);