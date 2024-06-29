import About from "@/components/About"
import { StickyScrollReveal } from "@/components/CTA/index";
import { ColoredLine } from "@/components/ColoredLine";
import { Contact } from "@/components/Contact";

export default function about() {
    return <>
            <div>
                <div className="text-center text-2xl text-primary font-semibold pt-30">
                    ABOUT US
                </div>
                <div className="flex text-black font-medium justify-center items-center text-2xl md:text-4xl lg:text-5xl mt-8">
                    Empowering everyone to
                </div>
                <div className="flex text-black font-medium justify-center items-center text-2xl md:text-4xl lg:text-5xl mt-2">
                    express their unique imagination
                </div>
                <div className="flex justify-center items-center mt-20">
                    <div className="md:w-4/5 w-11/12">
                        <About/>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center items-center my-30">
                <div className="w-11/12 md:w-4/5 border-b-2 border-gray-200"></div>
            </div>

            <div>
                <div className="text-center text-2xl text-primary font-semibold">
                    OUR VALUES
                </div>
                <div className="flex justify-center items-center text-3xl md:text-4xl lg:text-5xl text-black font-medium pt-10">
                    What we stand for?
                </div>
                <div className="flex justify-center items-center"> 
                    <div className="mt-20 w-11/12 md:w-4/5">
                        <StickyScrollReveal/>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center my-30">
                <div className="w-11/12 md:w-4/5 border-b-2 border-gray-200"></div>
            </div>

            <div className="flex justify-center items-center my-30">
                <Contact/>
                {/* Hiello */}
            </div>
        </>
}

