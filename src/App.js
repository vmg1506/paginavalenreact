import './App.scss';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import '../src/components/Header/Header.scss'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
