import { Toaster } from 'react-hot-toast';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Work from './components/my-work/Work';
import Nav from './components/navbar/Nav1';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';



function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <div className='distance' id='services'></div>
    <Services/>
    <div className='distance' id='about'></div>
    <About/>
    <div className='distance' id='skills'></div>
    <Skills/>
    <div className='distance'  id='portfolio'></div>
    <Work/>
    <div className='distance'  id='contact'></div>
    <Contact/>
    <Footer/>
    <Toaster   position="top-right"   reverseOrder={false}/>
    </>
  );
}

export default App;
