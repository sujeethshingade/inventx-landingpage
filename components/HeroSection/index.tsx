"use client";
import React from "react";
import { useTheme } from "next-themes";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "./text-effect";
import { SparklesCore } from "./hero-text";
import "./style.css"

export const HeroSection = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0,0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[240vh] pt-40 overflow-hidden antialiased relative flex flex-col self-auto perspective:1000px transform-style:preserve-3d"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const quote = "Where Innovation knows no Boundaries";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const particleColor = theme === "light" ? "#000000" : "#FFFFFF";
  return (
    <div className="max-w-6xl relative mx-auto py-10 md:py-10 px-4 w-full left-0 top-0">
      <div className="flex justify-center items-center mt-28">
        <div className="font-dark gradientext text-black dark:text-white ">
       
         
        <TextGenerateEffect className="justify-center" words={quote}/>
        </div>
      </div>
      {/* <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex justify-center items-center mt-10">
          <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center dark:text-white text-black relative z-20">
            Invent
          </h1>
          <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center relative z-20 text-green-500">
            X
          </h1>
        </div>

        <div className="w-[40rem] h-40 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1500}
            className="w-full h-full"
            particleColor={"#000000"}
          />

          <div className="absolute inset-0 w-full h-full bg-white dark:bg-black mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)"></div>
        </div>
      </div> */}
      <div className="h-[20rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="flex justify-center items-center mt-10">
          {/* <h1 className="md:text-6xl text-4xl lg:text-8xl font-bold text-center dark:text-white text-black relative z-20">
            Invent
          </h1>
          <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center relative z-20 text-green-500">
            X
          </h1> */}
        </div>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
  
          {/* Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={2500}
            className="w-full h-full"
            particleColor="#000000"
          /> */}
          
  
          {/* Radial Gradient to prevent sharp edges */}
          {/* <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[30rem] relative flex-shrink-0 rounded-lg overflow-hidden"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <div className="relative h-400 w-500 overflow-hidden rounded-lg">
          <Image
            src={product.thumbnail}
            fill={true}
            className="object-cover object-left-top"
            alt={product.title}
          />
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};