'use client'

import React, { useEffect } from 'react';
import anime from 'animejs';

const Motto: React.FC = () => {
  useEffect(() => {
    const textWrapper = document.querySelector('.ml11 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: true })
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, (document.querySelector('.ml11 .letters') as HTMLElement).getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        }).add({
          targets: '.ml11 .letter',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el: HTMLElement, i: number) => 34 * (i + 1)
        }).add({
          targets: '.ml11',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }, []);

  return (
    <h1 className="ml11 font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
      <span className="text-wrapper inline-block pt-1 pr-0.5 pb-1.5">
        <span className="line line1 opacity-0 absolute left-0 h-full w-0.5 bg-black transform-origin-left"></span>
        <span className="inline-block text-white">{`Unleashing the brighter side`}</span>
      </span>
    </h1>
  );
};

export default Motto;