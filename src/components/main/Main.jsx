import Hr from "../Hr"
import ContactSection from "./ContactSection"
import HeroSection from "./HeroSection"
import RocketSection from "./RocketSection"
import TestimonialsSection from "./TestimonialsSection"

const Main = () => {
  return (
      <main className="max-w-7xl mx-auto flex flex-col justify-center sm:justify-between ">
          <HeroSection />
          <Hr />
          <RocketSection />
          <Hr />
          <TestimonialsSection/>
          <Hr />
          <ContactSection/>
        </main >

  )
}

export default Main
