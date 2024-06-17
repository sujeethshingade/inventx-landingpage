'use client'

import React, { useEffect } from 'react';
import * as anime from 'animejs/lib/anime.min.js'


const InventXText: React.FC = () => {
  useEffect(() => {
    
    const textWrapper = document.querySelector('.ml3');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({ loop: true })
        .add({
          targets: '.ml3 .letter',
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el: HTMLElement, i: number) => 150 * (i + 1)
        }).add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }, []);

  return (
    <h1 className="ml3 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
      InventX
    </h1>
  );
};

export default InventXText