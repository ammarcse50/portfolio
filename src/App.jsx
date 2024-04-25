import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {" "}
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
