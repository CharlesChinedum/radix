import Image from "next/image";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero />
        <Why />
        <Features />
        <CTA />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
