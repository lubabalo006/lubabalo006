import React from "react";
//import App from "./App"
import Navbar from "/src/components/Navbar";
import Hero from "/src/components/Hero";
import Songs from "/src/components/songs";


const Preview = () => {
    return(
        <div>
            <div>
                <Navbar/>
                <Hero/>
                <Songs/>
            </div>
        </div>
    )
};

export default Preview