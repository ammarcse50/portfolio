import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <div className=""> <Navbar></Navbar></div>
     
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
