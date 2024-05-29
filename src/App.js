import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Desktop
import Main from "./pages/desktop/Main.js"
import Header from "./components/desktop/Header.js"
import Footer from "./components/desktop/Footer.js"
import { desktopSize } from "./data/style.js"
import About from "./pages/desktop/About.js";

// Mobile
import MobileHeader from "./components/mobile/MobileHeader.js";
import MobileMain from "./pages/mobile/MobileMain.js"
import MobileFooter from "./components/mobile/MobileFooter.js";




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
        {isDesktop ? <Header isDesktop /> : <MobileHeader />}
        <div className="container">
          <Routes>
            <Route path="/" element={isDesktop ? <Main /> : <MobileMain />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {isDesktop ? <Footer /> : <MobileFooter />}
      </div>
    </Router>
  );
}

export default App;
