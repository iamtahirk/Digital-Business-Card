import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="card">
      <Info />
      <div className="about-container">
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}

export default App
