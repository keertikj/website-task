
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/dashboard.js";
import Login from "./Pages/login";
import About from "./Pages/about";
import Contact from "./Pages/contact";

function App() {

  return (
 
      <Router>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

        </Routes>
      </Router>
  )
  
  
}

export default App;
