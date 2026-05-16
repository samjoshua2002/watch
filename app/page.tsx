import TopBar from './components/TopBar'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Articles from './sections/Articles'
import NewArrivals from './sections/NewArrivals'
import Boutique from './sections/Boutique'
import FeaturedWatches from './sections/FeaturedWatches'
import Studios from './sections/Studios'
import Trending from './sections/Trending'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Navbar />
      <Hero />
      <Articles />
      <NewArrivals />
      <Boutique />
      <FeaturedWatches />
      <Studios />
      <Trending />
      <Footer />
    </main>
  )
}
