"use client";
import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0 flex items-center justify-center">
        <div className="max-w-c-1390 sharp-lg bg-gradient-to-t from-[#F8F9FF] to-[#EEEEEE] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left lg:w-1/1 text-center py-12 px-4 md:px-0"
            >
              <h2 className="mb-4 w-12/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                What We Stand For
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In 
                convallis tortor eros. Donec vitae tortor lacus. Phasellus
                aliquam ante in maximus.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
