import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhyChoose from '../components/WhyChoose'
import ScrollProgress from '../components/ScrollProgress'
import CursorGlow from '../components/CursorGlow'
import WhatsappButton from '../components/WhatsappButton'

const Home = () => {
  return (
    <> 
      {/* <CursorGlow /> */}
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
       <WhyChoose />
      <Contact />
      <WhatsappButton />
      <Footer />
     

    </>
  )
}

export default Home