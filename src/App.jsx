
import './App.css'
import LogoSection from './components/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import Experience from './sections/Experience.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'



function App() {
  
  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <Experience/>
    <TechStack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
