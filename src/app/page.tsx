import HeroSection from '../components/home/HeroSection'
import TechnologyStack from '../components/home/TechnologyStack'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Testimonial from '../components/home/Testimonial'

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <TechnologyStack />
      <FeaturedProjects />
      <Testimonial />
    </main>
  )
}
