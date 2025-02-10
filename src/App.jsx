import { useState } from "react";

import MultiStepForm from "./components/MultiStepForm";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatSK from "./components/WhatSK";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (
    <div className="w-full ">
      <div className=" flex items-center justify-center flex-col">
        <Header />
        <Hero />
        <MultiStepForm />
        <WhatSK />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
