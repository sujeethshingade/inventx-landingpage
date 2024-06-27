import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import { HeroSection } from "@/components/HeroSection/index";
import { products } from "@/components/Data/ideas";
import { Globe } from "@/components/Globe";
import CustomCursor from '@/components/Common/CustomCursor';

export const metadata: Metadata = {
  title: "InventX",
  description: "This is Landing Page for InventX",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <div className=""> 
        <HeroSection products={products}/>
      </div>
      <CustomCursor />
      {/* <Feature /> */}
      {/* <About /> */}
      <div className="mb-20 mt-40"> 
        <Globe/>
      </div>
      {/* <CTA/> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <div className="mt-44"> 
        <Testimonial />
      </div>
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <div className=""> 
       {/* <LandingBlogCards/> */}
        <Blog/>
      </div>
      <FAQ />
    </main>
  );
}
