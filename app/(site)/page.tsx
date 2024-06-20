import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
//import Blog from "@/components/Blog";
import { ThreeDCardDemo } from "@/components/Blog/3d-effect";
import Testimonial from "@/components/Testimonial";
import { HeroSection } from "@/components/HeroSection/index";
import { products } from "@/components/Data/ideas";
import { Globe } from "@/components/Globe";

export const metadata: Metadata = {
  title: "InventX",
  description: "This is Landing Page for InventX",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <div className="p-8 md:p-14 lg:p-24"> 
        <HeroSection products={products}/>
      </div>
      {/* <Feature /> */}
      {/* <About /> */}
      <Globe/>
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <Testimonial />
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <ThreeDCardDemo/>
      <ThreeDCardDemo/>
      <ThreeDCardDemo/>
      <FAQ />
    </main>
  );
}
