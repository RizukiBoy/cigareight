import React, { useRef, useState } from 'react';
// Import Swiper React components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import Project from './components/Project';


export default function App() {
  return (
    <>
    <Router>
        <Routes>

          <Route path='/' element={
            <Layout showFooter={true}>
              <Home />
            </Layout>}>
          </Route>

          <Route path='/blog' element={
            <Layout showFooter={false}>
              <Blog />
            </Layout>}>
          </Route>

          <Route path='project' element={
            <Layout showFooter={false}>
              <Project />
            </Layout>}>
          </Route>
          
        </Routes>
    </Router>


    </>
  );
}
