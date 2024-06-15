// singlebrand.tsx
import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="relative block h-10 w-[98px]"
      >
        <div className="relative mx-auto w-full h-full flex items-center justify-center">
          <Image
            className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
            src={image}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
          <Image
            className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
            src={imageLight}
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </motion.a>
    </>
  );
};

export default SingleBrand;
