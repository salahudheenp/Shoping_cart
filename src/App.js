import './App.css';
import React from "react"
import Header from "./components/Header"
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Cart from "./components/Cart"
import Context from './context/Context';
import Home from "./components/Home"
function App() {
  return (
    <div>
    <Context>
    <BrowserRouter>
     <Header />
        <Routes>
          <Route exact path="/" Component={Home} >
    
      </Route>
          <Route exact path="/cart" Component={Cart} >
      
        </Route>
     </Routes>
    </BrowserRouter> 
      </Context>
     </div >

  );
}

export default App;
