
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
    useTransform(scrollYProgress, [0, 0.3], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    
    <div
      ref={ref}
      className="h-[190vh] md:h-[210vh] lg:h-[240vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto perspective:1000px transform-style:preserve-3d"
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


export const Header = () => {

  return (
    <div className="max-w-7xl relative mx-auto py-60 md:py-60 px-4 w-full left-0 top-0">
    <h1 className="text-2xl relative z-10 text-black md:text-7xl font-bold dark:text-white">
    Where Innovation <br /> knows no Boundaries.
    </h1>
    <p className="max-w-2xl relative z-10 text-black font-medium text-base md:text-xl mt-10 dark:text-neutral-200">
    Whether you’re here to showcase your genius idea or invest in the next big thing, 
    InventX is your platform to unleash potential, foster collaboration, and leave a 
    lasting impact on the world.
    </p>
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
        y: -10,
      }}
      key={product.title}
      className="group/product h-64 w-[20rem] md:h-72 md:w-[23rem] lg:h-86 lg:w-[30rem] relative flex-shrink-0 rounded-lg overflow-hidden"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <div className="relative h-400 w-400 lg:h-400 lg:w-600 overflow-hidden rounded-lg">
          <Image
            src={product.thumbnail}
            layout="fill" 
            objectFit="cover"
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
