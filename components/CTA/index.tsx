"use client";
import React from "react";
import { WhatweDo } from "./WhatweDo";
import Image from "next/image";
const content = [
  {
    title: "Showcasing Innovation: Bridging Creativity and Capital at InventX",
    description:
      "Welcome to Inventx, a pioneering platform designed exclusively for RV students in Bangalore to showcase their innovative projects and connect with potential investors. At Inventx, we believe that the future belongs to those who dare to think differently and innovate fearlessly. Our mission is to create a vibrant ecosystem where student innovators can turn their groundbreaking ideas into reality, and investors can discover and support the next big breakthroughs. By bridging the gap between creativity and capital, Inventx is committed to fostering a culture of innovation and entrepreneurship within the RV community.",
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
    title: "Empowering Student Projects: A Platform for Exposure and Resources",
    description:
      "Inventx was born out of the recognition that many brilliant student projects often go unnoticed due to a lack of exposure and resources. Our platform addresses this gap by providing a user-friendly, accessible space where students can upload detailed descriptions of their projects, complete with supporting documents and multimedia. This not only allows students to present their ideas professionally but also ensures that investors have all the information they need to make informed decisions. From tech innovations and business plans to social impact initiatives, Inventx is a hub for diverse and dynamic student projects.",
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
    title: "Streamlined Investment: Connecting Innovators and Investors",
    description:
      "At Inventx, we understand the challenges faced by both budding innovators and discerning investors. Our platform is designed to simplify and streamline the process of project discovery and investment. Students can easily create and manage their project profiles, engage with interested investors, and receive feedback and support. Meanwhile, investors can explore a curated selection of promising projects, communicate directly with project creators, and invest in ideas that align with their vision and values. This interactive and collaborative approach not only benefits individual participants but also contributes to the overall growth of the RV innovation ecosystem.",
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
    title: "Beyond the Platform: Support Services and Community at InventX",
    description:
      "Our commitment to excellence extends beyond just providing a platform. Inventx also offers a range of resources and support services to help students refine their projects and enhance their presentation skills. From workshops and mentorship programs to networking events, we aim to equip our users with the tools they need to succeed. By fostering a supportive and inclusive community, Inventx is more than just a marketplace for ideas; it is a catalyst for innovation and a launchpad for the next generation of change-makers. Join us on this exciting journey and be a part of the Inventx revolution.",
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
export function StickyScrollReveal() {
  return (
    <div >
      <WhatweDo content={content} />
    </div>
  );
}


