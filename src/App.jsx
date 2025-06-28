import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MyJourney from './components/MyJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {
  return (
  <h1 className='App'>
    <Header/>
    <Hero/>
    <About/>
    <MyJourney/>
    <Projects/>
    <Contact/>
    <Footer/>
  </h1>
  );
}

export default App;
