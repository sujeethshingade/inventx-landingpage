"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
 
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 100,
      },
      {
        duration: 0,
        delay: stagger(0),
      }
    );
  }, [scope.current]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-100"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
 
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-0">
        <div className=" dark:text-white text-black text-lg md:text-4xl lg:text-8xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};