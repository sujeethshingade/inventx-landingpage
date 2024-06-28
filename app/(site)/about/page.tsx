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
        <div className="pt-20">
            <StickyScrollRevealDemo/>
            {/* <Contact /> */}
        </div>
    </>
}