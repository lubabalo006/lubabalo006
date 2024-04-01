import React from "react";
//import Login from "/src/components/Login";
import Preview from "/src/Preview";
import { useState,useEffect } from "react";
import "./App.css"

const App = () => {

  const [loading, setloading] = useState(true);
  const [login, setlogin] = React.useState(true);
  const [preview, setpreview] = React.useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false);
    },3000);
  }, []);

  // TO LOGIN
  const onclickLogin = () => {
    setloading(false);
    setTimeout(() => {
      setlogin(false);
      setpreview(true);
    }, 3000);
  }


  return(
    <div className="app">
      {loading ? (
        <div className="honeycomb">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        ) : (
        <div>
          <Preview/>
        </div>
        )}
    </div>
  )
};

export default App