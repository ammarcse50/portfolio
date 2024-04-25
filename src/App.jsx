

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
    </div>
  );
}

export default App;
