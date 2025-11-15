import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import HighLights from './components/HighLights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
export default function Home() {
  return (
 <main className='bg-black text-white'>
  <Navbar/>
  <Hero/>
  <About/>
  <Capabilities/>
  <HighLights/>
  <Contact/>
  <Footer/>

 </main>
  )
}