
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  
  return (
    <div>
     <Header/>
     <Home/>
     <About/>
     <Services/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
