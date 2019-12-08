import React from 'react';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <Register/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;