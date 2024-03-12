import React from "react";
import Navbar from "./navbar";
import API from "./api";
import "./App.css"

const App = () => {
  return(
    
      <div className="container">
        <Navbar />
        <API />
      </div>
    
  )
}

export default App;