import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {  BrowserRouter,  Routes,  Route,  Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to React Router
        </p>
      </header>
      <BrowserRouter>
        <Link to="/home">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
