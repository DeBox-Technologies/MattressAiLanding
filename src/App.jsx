import Navbar from "./components/Navbar"
import ProductShowcase from "./components/ProductShowcase"
import HeroDemo from "./components/HeroDemo"
import PricingCards from "./components/PricingCards"
import InfoCards from "./components/Infocards"
import EndPageHero from "./components/EndPageHero"
import NewsletterSignup from "./components/NewsletterSignup"

function App() {

  return (
    <>
      <div className='bg-primary-50 dark:bg-gray-800 min-h-screen pb-10 overflow-hidden'>
        <Navbar />
        <ProductShowcase />
        <HeroDemo />
        <InfoCards />
        <PricingCards />
        <NewsletterSignup />
        <EndPageHero />
      </div>
    </>
  )
}

export default App
