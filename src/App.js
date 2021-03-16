import { Component } from "react";
import style from './App.css';


import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className={style.app}>
      <Header />
    <Home/>
       <Footer/>
      </div>
  );
}

export default App;
