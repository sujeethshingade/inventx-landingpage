import React from "react";

export function HeroSectionCard() {
  return (
    <div className="h-[40rem] md:h-[65rem] lg:h-[70rem] w-full rounded-3xl flex md:justify-center bg-zinc-950 antialiased bg-grid-white/[0.04] relative overflow-hidden  md:px-5 px-0">
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-5 md:pt-20">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Where Innovation <br /> knows no boundaries.
            </h1>
            <p className="mt-5 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Whether you&apos;re here to showcase your genius idea or invest in the 
                next big thing, InventX is your platform to unleash potential, foster 
                collaboration, and leave a lasting impact on the world.
            </p>
            <div className="justify-center items-center md:mt-10 lg:mt-10 hidden md:flex">
                <HeroButton1/>
                <HeroButton2/>
            </div>
            <div className="flex flex-col mt-18 md:mt-28 lg:mt-22">
                <Card/>
            </div>
        </div>
    </div>
  );
}


export const Card = () => {
    return (
      <div
        style={{
          boxShadow:
            "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        }}
        className="max-w-6xl -mt-12 mx-auto h-[23rem] md:h-[35rem] lg:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-4 bg-[#222222] rounded-[30px] shadow-2xl"
      >
        <div className=" h-full w-full rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl p-2 md:p-4 overflow-hidden">
          <img src="/images/blog/blog-01.jpeg" alt="" className="object-cover"/>
        </div>
      </div>
    );
};

export const HeroButton1 = () => {
    return <>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10 ">
                <div className="text-md">{`Get started`}</div>
                {/* <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                </svg> */}
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </>
}


export const HeroButton2 = ()  => {
    return <>
        <button className="px-6 py-2 bg-transparent text-white rounded-lg transform hover:-translate-y-1 transition duration-400">
            <div className="flex justify-center items-center">
                <div className="text-md">Contact us</div>
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                </svg>
            </div>
        </button>
    </>
}