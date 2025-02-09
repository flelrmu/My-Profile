import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Collaboration from "../components/Collaboration";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Portofolio from "../components/Portofolio";
import Skills from "../components/Skills";


function ProfilePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portofolio />
      <Collaboration />
      <Contact />
      <Footer />
    </>
  );
}

export default ProfilePage;
