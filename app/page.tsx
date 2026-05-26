import './globals.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Calculator from './components/Calculator'
import Quiz from './components/Quiz'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Features from './components/Features'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Calculator />
      <Quiz />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}
