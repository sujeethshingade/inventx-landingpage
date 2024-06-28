import About from "@/components/About"
import { StickyScrollRevealDemo } from "@/components/CTA";
import Contact from "@/components/Contact";

export default function about() {
    return <>
        <div className="flex justify-center items-center mt-20">
            <div className="md:w-4/5 w-11/12">
                <About/>
            </div>
        </div>
    <div className="text-center text-2xl text-primary font-semibold pt-30">
        OUR VALUES
    </div>

    <div className="flex justify-center items-center text-3xl md:text-4xl lg:text-5xl text-black font-medium pt-10">
        What we stand for?
    </div>

      <div className="flex justify-center items-center"> 
    <div className="py-20 w-3/4 md:3/4 lg:2/3">
    <StickyScrollRevealDemo/>
        {/* <Contact />
        <About/> */}
        </div>
        </div>
    </>
}