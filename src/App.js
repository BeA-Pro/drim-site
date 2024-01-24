import React from "react";
// scss
import "./asset/scss/common.scss"

import Main from "./pages/main/Main.js"
import Header from "./component/common/Header.js"
import Footer from "./component/common/Footer.js"



function App() {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
