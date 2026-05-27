import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Calculator from './components/Calculator'
import Testimonials from './components/Testimonials'
import Quiz from './components/Quiz'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Calculator />
      <Testimonials />
      <Quiz />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
