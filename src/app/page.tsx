import { Navbar } from "@/components/Navbar";
import {
  Hero,
  WhatsInside,
  HowItWorks,
  CTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatsInside />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
