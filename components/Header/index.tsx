"use client";

import Image from "next/image";
import menuData from "./menuData";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { HamMenuState } from "@/store/HamMenu/atom";
import { HamMenu } from "./hamMenu";

export default function Header() {
    const router = useRouter();
    const [ isOpen, setIsOpen ] = useRecoilState(HamMenuState);

    function handleHamClick() {
      setIsOpen(!isOpen);
    }

    return (
      <>
        <header className={`top-0 z-[9999] bg-transparent`}>
          <div className="w-screen h-14 bg-transparent flex justify-center items-center font-semibold lg:px-16 px-4 mt-5">
            <nav className="flex items-center w-full mr-12 lg:mx-16">
                <div className="flex justify-between items-center w-full">
                    <div className="h-full w-48" onClick={() => router.push("/")}>
                        <Image
                            src="/images/logo/logo-light.svg"
                            width={500}
                            height={300}
                            alt="Logo"
                            className="cursor-pointer"
                        />
                    </div>
                    <div className={`h-8 w-8 lg:hidden flex cursor-pointer ${isOpen ? "hidden" : ""}`} onClick={handleHamClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </div>
                    <div className={`h-8 w-8 lg:hidden flex cursor-pointer ${isOpen ? "" : "hidden"}`} onClick={handleHamClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="hidden lg:flex justify-between items-center text-black font-semibold bg-gray-100 border-2 rounded-full px-6">
                        {menuData.map((item, index) => (
                            <div key={index} className="mx-8 py-3 cursor-pointer hover:text-black" 
                            onClick={() => {
                              setIsOpen(false);
                              router.push(`${item.path}`);
                            }}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex justify-between items-center text-black">
                        <div className="m-0 cursor-pointer">Sign Up</div>
                        <div className="m-8 cursor-pointer w-20 h-10 hover:bg-gray-800 bg-black text-white px-12 py-5 border-2 rounded-2xl flex justify-center items-center">
                            Login
                        </div>
                    </div>
                </div>
            </nav> 
          </div>
        </header>
        <div className={`bg-white ${isOpen ? "lg:hidden" : "hidden"} overflow-y-hidden`}>
            <HamMenu/>
        </div>
      </>
    );
}
