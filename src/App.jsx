import Navbar from "./components/Navbar"
import HeroDemo from "./components/HeroDemo"
import PricingCards from "./components/PricingCards"
import InfoCards from "./components/Infocards"
import EndPageHero from "./components/EndPageHero"

function App() {

  return (
    <>
      <div className='bg-primary-50 dark:bg-gray-800 min-h-screen pb-10'>
        <Navbar />
        <HeroDemo />
        <InfoCards />
        <PricingCards />
        <EndPageHero />
      </div>
    </>
  )
}

export default App