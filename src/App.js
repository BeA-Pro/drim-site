import React, { useEffect, useState } from "react";
// scss
import "./asset/scss/common.scss"

// Desktop
import Main from "./pages/main/Main.js"
import Header from "./component/common/desktop/Header.js"
import Footer from "./component/common/desktop/Footer.js"
import { desktopSize } from "./component/data/style.js"

// Mobile
import MobileHeader from "./component/common/mobile/MobileHeader.js";



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
    <div className="wrap">
      {isDesktop && <Header isDesktop />}
      {!isDesktop && <MobileHeader />}
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
