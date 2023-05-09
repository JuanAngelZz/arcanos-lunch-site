import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  About,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
};

export default App;
