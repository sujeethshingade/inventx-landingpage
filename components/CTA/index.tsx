"use client";
import React from "react";
import { WhatweDo } from "./WhatweDo";
import Image from "next/image";
const content = [
  {
    title: "Inventx as an Ideation platform",
    description:
      "At InventX, we believe in the power of youthful creativity and bold ideas. We're not just a platform; we're a movement fuelled by the ambition of RV institution students who are reimagining industries, solving global challenges, and shaping the future. Join us as we redefine innovation and investment in the digital age.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-black">
          <Image
            src="/images/hero/datascience.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-black">
        <Image
          src="/images/hero/cyber-security.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-black">
          <Image
            src="/images/hero/data-science.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-black">
          <Image
            src="/images/hero/cyber-security.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div >
      <WhatweDo content={content} />
    </div>
  );
}


