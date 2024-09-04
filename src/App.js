import "./App.css";

import React from "react";
import LastVideos from "./components/LastVideos";
import PricingSection from "./components/PricingSection";
import Navbar from "./components/Navbar";
import Method from "./components/Method";
import Review from "./components/Review";
import Faq from "./components/Faq";
import EndCta from "./components/EndCta";
import Footer from "./components/Footer";
import MainTCAT from "./components/MainCTAT";

function App() {
  return (
    <div id="acceuil" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <MainTCAT />
        <LastVideos />
        <Method />
        <PricingSection />
        <Review />
        <Faq />
        <EndCta />
        <Footer />
      </main>
    </div>
  );
}

export default App;
