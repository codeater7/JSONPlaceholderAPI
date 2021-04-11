import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import UserPage from "./UserPage";

export default function App() {
  return (
    <>
     
        <section className="Header">
        <Header />
       </section>
        <div className= "">
          <Routes>
            <Route path="/" element={<Detail />} />
            <Route path="/users/:id" element={<UserPage />} />
          </Routes>
        </div> 
       
      <div className="footer">
      <Footer />
      </div>
   
    </>
  );
}
