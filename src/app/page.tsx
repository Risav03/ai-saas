import { Navbar } from "@/components/Navbar";
import {
  Hero,
  Features,
  HowItWorks,
  Pricing,
  Testimonials,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
