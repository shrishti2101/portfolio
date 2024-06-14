import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import './App.css'

function App() {
  return (
    <div className="App ">
      <Router>
      <header className="App-header">
        <Navbar/>
      </header>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
       
      </Router>
    
    </div>
  );
}

export default App;
