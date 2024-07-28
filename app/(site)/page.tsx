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
import HeroSection1 from "@/components/HeroSection/index1";

export const metadata: Metadata = {
  title: "InventX",
  description: "This is Landing Page for InventX",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <div className="md:mx-5 lg:mx-8 rounded-lg pt-5 pb-10 lg:pb-15 xl:pb-20"> 
        {/* <HeroSection products={products}/> */}
        <HeroSection1/>
      </div>
      {/* <CustomCursor /> */}
      {/* <Feature /> */}
      {/* <About /> */}
      <div className="py-10 lg:py-15 xl:py-20 mx-4"> 
        <div className="flex justify-center items-center h-full w-full">
          <Globe/>
        </div>
      </div>
      {/* <CTA/> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <div className="py-10 lg:py-15 xl:py-20"> 
        <Testimonial />
      </div>
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <div className="py-10 lg:py-15 xl:py-20"> 
       {/* <LandingBlogCards/> */}
        <Blog/>
      </div>
      <div className="py-10 lg:py-15 xl:py-20"> 
        <FAQ />
      </div>
    </main>
  );
}