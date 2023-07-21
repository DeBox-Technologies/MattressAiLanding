import Navbar from "./components/Navbar"
import ProductShowcase from "./components/ProductShowcase"
import HeroDemo from "./components/HeroDemo"
import PricingCards from "./components/PricingCards"
import InfoCards from "./components/Infocards"
import EndPageHero from "./components/EndPageHero"
// import NewsletterSignup from "./components/NewsletterSignup"

function App() {

  return (
    <>
      <div className='bg-primary-50 dark:bg-gray-800 min-h-screen overflow-hidden'>
        <Navbar />
        <ProductShowcase />
        <HeroDemo />
        <InfoCards />
        <PricingCards />
        <EndPageHero />
        {/* <footer className="bg-secondary-50 dark:bg-gray-900 p-2 h-full mx-auto rounded-t-2xl">
          <NewsletterSignup className="rounded-2xl"/>
        </footer> */}
      </div>
    </>
  )
}

export default App
