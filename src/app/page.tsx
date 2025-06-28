import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import TeamPreview from '@/components/sections/TeamPreview'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import FloatingMenu from '@/components/ui/FloatingMenu'

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      <div className="relative">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <TeamPreview />
        <Contact />
      </div>
      <Footer />
      <FloatingMenu />
    </main>
  )
}
