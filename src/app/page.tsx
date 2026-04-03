import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TreatmentTabs from '@/components/TreatmentTabs'
import WhyChooseUs from '@/components/WhyChooseUs'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Team from '@/components/Team'
import BookingCTA from '@/components/BookingCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileBookBar from '@/components/MobileBookBar'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TreatmentTabs />
        <WhyChooseUs />
        <Pricing />
        <Reviews />
        <Team />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  )
}
