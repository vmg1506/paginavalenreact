import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
/* import Footer from './components/Footer/Footer'; */
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import '../src/components/Header/Header.scss'


function App() {
  return (
    <>
      
      <Header/>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/About-Me" element={ <About/> } />
          <Route path="Contact" element={ <Contact/> } />
          {/* <Home/> */}
         {/*  <About/> */}
      </Routes>
      
      
    </>
  );
}

export default App;
