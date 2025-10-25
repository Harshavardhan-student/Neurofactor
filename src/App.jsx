import './App.css'
import './styles/navigation.css'
import './styles/hero.css'
import './styles/aboutus.css'
import './styles/specialties.css'
import './styles/brandChef.css'
import './styles/testimonials.css'
import './styles/locations.css'
import './styles/community.css'
import './styles/newsletterFooter.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import FeaturedMenu from './components/FeaturedMenu'
import OnlineOrder from './components/OnlineOrder'
import BookTable from './components/BookTable'
import Specialties from './components/Specialties'
import BrandChef from './components/BrandChef'
import Testimonials from './components/Testimonials'
import Locations from './components/Locations'
import Community from './components/Community'
import NewsletterFooter from './components/NewsletterFooter'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <FeaturedMenu />
      <OnlineOrder />
      <BookTable />
      <Specialties />
      <BrandChef />
      <Testimonials />
      <Locations />
      <Community />
      <NewsletterFooter />
    </>
  )
}

export default App
