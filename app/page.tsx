import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import GlobalNetwork from "@/components/GlobalNetwork";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonials from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <GlobalNetwork />
      <TrustedBrands />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}
