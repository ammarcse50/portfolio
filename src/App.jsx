import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <div className="">
        {" "}
        <Navbar></Navbar>
      </div>

      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </div>
      <Footer></Footer>
      <ScrollToTop
        className="hidden lg:flex items-center justify-center "
        color="black"
        style={{
          width: "50px",

          backgroundColor: "#00eeff",
          height: "50px",
          borderRadius: "50%",
          boxShadow: "0 0px 30px #00eeff",

          // Add more styles as needed
        }}
        smooth
      />
    </div>
  );
}

export default App;
