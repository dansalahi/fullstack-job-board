import React from 'react';
import Navbar from './components/navbar'
import FixVideo from './components/video/video'
// import './App.css';
import SmoothScroll from "./components/common/smoothScroll/smoothScroll";

function App() {
  return (
    <SmoothScroll>
      <FixVideo />
      {/* <Navbar /> */}
    </SmoothScroll>
  );
}

export default App;
