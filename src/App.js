import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Desktop
import { Main, MobileMain } from "./pages/Main.js"
import { Header, MobileHeader } from "./components/Header.js"
import { Footer, MobileFooter } from "./components/Footer.js"
import { desktopSize } from "./data/style.js"
import { About, MobileAbout } from "./pages/About.js";
import { Inquiry, MobileInquiry } from "./pages/Inquiry.js";



function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= desktopSize);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="wrap">
        {isDesktop ? <Header /> : <MobileHeader />}
        <div className="container">
          <Routes>
            <Route path="/" element={isDesktop ? <Main /> : <MobileMain />} />
            <Route path="/about" element={isDesktop ? <About /> : <MobileAbout />} />
            <Route path="/inqury" element={isDesktop ? <Inquiry /> : <MobileInquiry />} />
          </Routes>
        </div>
        {isDesktop ? <Footer /> : <MobileFooter />}
      </div>
    </Router>
  );
}

export default App;
