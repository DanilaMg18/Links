import React from "react";
import {Routes, Route, Link} from "react-router-dom";  
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Community } from "./components/Community";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/Product">Product</Link>
        <Link to="/About">About</Link>
        <Link to="/Community">Community</Link>
      </header>

    <div className="Links">
      <Routes>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Community" element={<Community/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
